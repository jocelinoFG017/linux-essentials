from flask import Flask, render_template, request, redirect, url_for
import sqlite3
from datetime import datetime

app = Flask(__name__)
DB_NAME = 'banco.db'

def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/')
def index():
    return redirect(url_for('cadastrar_pergunta'))


@app.route('/perguntas')
def listar_perguntas():
    conn = get_db_connection()
    perguntas = conn.execute(
        'SELECT p.id, p.titulo, t.nome AS tipo FROM perguntas p JOIN tipo t ON p.tipo_id = t.id'
    ).fetchall()
    conn.close()
    return render_template('listar_perguntas.html', perguntas=perguntas)


@app.route('/perguntas/cadastrar', methods=['GET', 'POST'])
def cadastrar_pergunta():
    if request.method == 'POST':
        titulo = request.form['titulo']
        tipo = request.form['tipo']  # 'texto' ou 'multipla_escolha'
        resposta_texto = request.form.get('resposta_texto')
        resposta_alternativa = request.form.get('resposta_alternativa')
        alt_a = request.form.get('a')
        alt_b = request.form.get('b')
        alt_c = request.form.get('c')
        alt_d = request.form.get('d')
        alt_e = request.form.get('e')

        conn = get_db_connection()
        tipo_id = conn.execute('SELECT id FROM tipo WHERE nome = ?', (tipo,)).fetchone()['id']

        conn.execute('''
            INSERT INTO perguntas 
            (titulo, tipo_id, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, resposta_texto, resposta_alternativa, data_cadastro)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (titulo, tipo_id, alt_a, alt_b, alt_c, alt_d, alt_e, resposta_texto, resposta_alternativa, datetime.now()))
        conn.commit()
        conn.close()

        return redirect(url_for('listar_perguntas'))

    return render_template('cadastrar_pergunta.html')


@app.route('/quiz')
def quiz():
    conn = get_db_connection()
    perguntas = conn.execute('SELECT * FROM perguntas ORDER BY RANDOM() LIMIT 5').fetchall()
    conn.close()
    return render_template('quiz.html', perguntas=perguntas)


if __name__ == '__main__':
    app.run(debug=True)
