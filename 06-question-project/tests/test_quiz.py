import sqlite3


def cadastrar_texto(client, titulo="Capital do Brasil", resposta="Brasília"):
    return client.post(
        "/perguntas/cadastrar",
        data={
            "titulo": titulo,
            "tipo": "texto",
            "resposta_texto": resposta,
        },
    )


def cadastrar_multipla(client):
    return client.post(
        "/perguntas/cadastrar",
        data={
            "titulo": "Qual comando lista arquivos?",
            "tipo": "multipla_escolha",
            "a": "pwd",
            "b": "cd",
            "c": "ls",
            "d": "mkdir",
            "e": "touch",
            "resposta_correta": "c",
        },
    )


def buscar_pergunta(app, titulo):
    conn = sqlite3.connect(app.config["DATABASE"])
    conn.row_factory = sqlite3.Row
    try:
        return conn.execute(
            "SELECT * FROM perguntas WHERE titulo = ?", (titulo,)
        ).fetchone()
    finally:
        conn.close()


def test_banco_e_criado_com_chaves_estrangeiras(app):
    conn = sqlite3.connect(app.config["DATABASE"])
    try:
        tipos = conn.execute("SELECT COUNT(*) FROM tipo").fetchone()[0]
        conn.execute("PRAGMA foreign_keys = ON")
        foreign_keys = conn.execute("PRAGMA foreign_keys").fetchone()[0]
    finally:
        conn.close()

    assert tipos == 2
    assert foreign_keys == 1


def test_cadastro_de_texto_e_listagem(client, app):
    response = cadastrar_texto(client)
    assert response.status_code == 302

    pergunta = buscar_pergunta(app, "Capital do Brasil")
    assert pergunta["resposta_texto"] == "Brasília"
    assert pergunta["resposta_alternativa"] is None

    pagina = client.get("/perguntas")
    assert pagina.status_code == 200
    assert "Capital do Brasil" in pagina.get_data(as_text=True)


def test_cadastro_multipla_escolha_salva_gabarito(client, app):
    response = cadastrar_multipla(client)
    assert response.status_code == 302

    pergunta = buscar_pergunta(app, "Qual comando lista arquivos?")
    assert pergunta["resposta_alternativa"] == "c"
    assert pergunta["alternativa_c"] == "ls"
    assert pergunta["resposta_texto"] is None


def test_validacao_impede_pergunta_incompleta(client):
    response = client.post(
        "/perguntas/cadastrar",
        data={"titulo": "Questão incompleta", "tipo": "multipla_escolha"},
    )

    assert response.status_code == 400
    assert "Preencha todas as alternativas" in response.get_data(as_text=True)


def test_quiz_corrige_texto_sem_diferenciar_maiusculas(client, app):
    cadastrar_texto(client)
    pergunta = buscar_pergunta(app, "Capital do Brasil")

    response = client.post(
        "/quiz/responder",
        data={
            "pergunta_id": str(pergunta["id"]),
            f"resposta_{pergunta['id']}": "  BRASÍLIA  ",
        },
    )

    assert response.status_code == 200
    pagina = response.get_data(as_text=True)
    assert "1 de 1 corretas" in pagina
    assert "Correta" in pagina


def test_quiz_corrige_multipla_escolha(client, app):
    cadastrar_multipla(client)
    pergunta = buscar_pergunta(app, "Qual comando lista arquivos?")

    response = client.post(
        "/quiz/responder",
        data={
            "pergunta_id": str(pergunta["id"]),
            f"resposta_{pergunta['id']}": "c",
        },
    )

    assert response.status_code == 200
    pagina = response.get_data(as_text=True)
    assert "1 de 1 corretas" in pagina
    assert "C) ls" in pagina


def test_envio_sem_perguntas_retorna_erro(client):
    response = client.post("/quiz/responder", data={})
    assert response.status_code == 400
    assert "Nenhuma resposta válida" in response.get_data(as_text=True)
