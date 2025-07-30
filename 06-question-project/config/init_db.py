import sqlite3
from datetime import datetime

conn = sqlite3.connect('banco.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS tipo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE
)
''')

cursor.execute('INSERT OR IGNORE INTO tipo (nome) VALUES (?)', ('texto',))
cursor.execute('INSERT OR IGNORE INTO tipo (nome) VALUES (?)', ('multipla_escolha',))

cursor.execute('''
CREATE TABLE IF NOT EXISTS perguntas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    tipo_id INTEGER NOT NULL,
    alternativa_a TEXT,
    alternativa_b TEXT,
    alternativa_c TEXT,
    alternativa_d TEXT,
    alternativa_e TEXT,
    resposta_texto TEXT,
    resposta_alternativa TEXT,
    data_cadastro TIMESTAMP NOT NULL,
    FOREIGN KEY (tipo_id) REFERENCES tipo(id)
)
''')

conn.commit()
conn.close()
