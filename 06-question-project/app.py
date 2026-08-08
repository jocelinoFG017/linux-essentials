import os
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

from flask import Flask, current_app, redirect, render_template, request, url_for


BASE_DIR = Path(__file__).resolve().parent
SCHEMA_PATH = BASE_DIR / "config" / "schema.sql"
TIPOS_VALIDOS = {"texto", "multipla_escolha"}
ALTERNATIVAS_VALIDAS = {"a", "b", "c", "d", "e"}


def get_db_connection():
    conn = sqlite3.connect(current_app.config["DATABASE"])
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_database():
    database = Path(current_app.config["DATABASE"])
    database.parent.mkdir(parents=True, exist_ok=True)

    conn = sqlite3.connect(database)
    try:
        conn.execute("PRAGMA foreign_keys = ON")
        conn.executescript(SCHEMA_PATH.read_text(encoding="utf-8"))
        conn.commit()
    finally:
        conn.close()


def normalizar_resposta(valor):
    return " ".join((valor or "").strip().casefold().split())


def create_app(test_config=None):
    app = Flask(__name__, instance_path=str(BASE_DIR / "instance"))
    app.config.from_mapping(
        DATABASE=str(Path(app.instance_path) / "banco.db"),
    )

    if test_config:
        app.config.update(test_config)

    with app.app_context():
        init_database()

    @app.cli.command("init-db")
    def init_db_command():
        """Cria as tabelas necessárias sem apagar dados existentes."""
        init_database()
        print(f"Banco inicializado em {app.config['DATABASE']}")

    @app.route("/")
    def index():
        return redirect(url_for("listar_perguntas"))

    @app.route("/perguntas")
    def listar_perguntas():
        conn = get_db_connection()
        try:
            perguntas = conn.execute(
                """
                SELECT p.id, p.titulo, t.nome AS tipo
                FROM perguntas p
                JOIN tipo t ON p.tipo_id = t.id
                ORDER BY p.id DESC
                """
            ).fetchall()
        finally:
            conn.close()

        return render_template("listar_perguntas.html", perguntas=perguntas)

    @app.route("/perguntas/cadastrar", methods=["GET", "POST"])
    def cadastrar_pergunta():
        erro = None

        if request.method == "POST":
            titulo = request.form.get("titulo", "").strip()
            tipo = request.form.get("tipo", "").strip()
            resposta_texto = request.form.get("resposta_texto", "").strip()
            resposta_alternativa = request.form.get("resposta_correta", "").strip().lower()
            alternativas = {
                letra: request.form.get(letra, "").strip()
                for letra in sorted(ALTERNATIVAS_VALIDAS)
            }

            if not titulo:
                erro = "Informe o título da pergunta."
            elif tipo not in TIPOS_VALIDOS:
                erro = "Selecione um tipo de pergunta válido."
            elif tipo == "texto" and not resposta_texto:
                erro = "Informe a resposta esperada."
            elif tipo == "multipla_escolha" and not all(alternativas.values()):
                erro = "Preencha todas as alternativas."
            elif (
                tipo == "multipla_escolha"
                and resposta_alternativa not in ALTERNATIVAS_VALIDAS
            ):
                erro = "Selecione a alternativa correta."

            if erro is None:
                if tipo == "texto":
                    alternativas = {letra: None for letra in ALTERNATIVAS_VALIDAS}
                    resposta_alternativa = None
                else:
                    resposta_texto = None

                conn = get_db_connection()
                try:
                    tipo_row = conn.execute(
                        "SELECT id FROM tipo WHERE nome = ?", (tipo,)
                    ).fetchone()
                    conn.execute(
                        """
                        INSERT INTO perguntas (
                            titulo, tipo_id,
                            alternativa_a, alternativa_b, alternativa_c,
                            alternativa_d, alternativa_e,
                            resposta_texto, resposta_alternativa, data_cadastro
                        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        """,
                        (
                            titulo,
                            tipo_row["id"],
                            alternativas["a"],
                            alternativas["b"],
                            alternativas["c"],
                            alternativas["d"],
                            alternativas["e"],
                            resposta_texto,
                            resposta_alternativa,
                            datetime.now(timezone.utc).isoformat(),
                        ),
                    )
                    conn.commit()
                finally:
                    conn.close()

                return redirect(url_for("listar_perguntas"))

        return render_template(
            "cadastrar_pergunta.html", erro=erro, dados=request.form
        ), (400 if erro else 200)

    @app.route("/quiz")
    def quiz():
        conn = get_db_connection()
        try:
            perguntas = conn.execute(
                """
                SELECT p.*, t.nome AS tipo
                FROM perguntas p
                JOIN tipo t ON p.tipo_id = t.id
                ORDER BY RANDOM()
                LIMIT 5
                """
            ).fetchall()
        finally:
            conn.close()

        return render_template("quiz.html", perguntas=perguntas)

    @app.route("/quiz/responder", methods=["POST"])
    def responder_quiz():
        ids = []
        for valor in request.form.getlist("pergunta_id"):
            try:
                pergunta_id = int(valor)
            except ValueError:
                continue
            if pergunta_id not in ids:
                ids.append(pergunta_id)

        if not ids:
            return render_template(
                "resultado.html", resultados=[], acertos=0, total=0
            ), 400

        placeholders = ",".join("?" for _ in ids)
        conn = get_db_connection()
        try:
            rows = conn.execute(
                f"""
                SELECT p.*, t.nome AS tipo
                FROM perguntas p
                JOIN tipo t ON p.tipo_id = t.id
                WHERE p.id IN ({placeholders})
                """,
                ids,
            ).fetchall()
        finally:
            conn.close()

        perguntas = {row["id"]: row for row in rows}
        resultados = []
        acertos = 0

        for pergunta_id in ids:
            pergunta = perguntas.get(pergunta_id)
            if pergunta is None:
                continue

            resposta = request.form.get(f"resposta_{pergunta_id}", "").strip()
            if pergunta["tipo"] == "texto":
                correta = normalizar_resposta(resposta) == normalizar_resposta(
                    pergunta["resposta_texto"]
                )
                gabarito = pergunta["resposta_texto"]
            else:
                correta = resposta.lower() == pergunta["resposta_alternativa"]
                letra = pergunta["resposta_alternativa"]
                texto = pergunta[f"alternativa_{letra}"] if letra else ""
                gabarito = f"{letra.upper()}) {texto}" if letra else "Não informado"

            acertos += int(correta)
            resultados.append(
                {
                    "titulo": pergunta["titulo"],
                    "resposta": resposta or "Não respondida",
                    "gabarito": gabarito,
                    "correta": correta,
                }
            )

        return render_template(
            "resultado.html",
            resultados=resultados,
            acertos=acertos,
            total=len(resultados),
        )

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=os.environ.get("FLASK_DEBUG") == "1")
