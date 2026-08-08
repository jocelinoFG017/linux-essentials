CREATE TABLE IF NOT EXISTS tipo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE
);

INSERT OR IGNORE INTO tipo (nome) VALUES ('texto');
INSERT OR IGNORE INTO tipo (nome) VALUES ('multipla_escolha');

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
    resposta_alternativa TEXT CHECK (
        resposta_alternativa IS NULL
        OR resposta_alternativa IN ('a', 'b', 'c', 'd', 'e')
    ),
    data_cadastro TEXT NOT NULL,
    FOREIGN KEY (tipo_id) REFERENCES tipo(id)
);
