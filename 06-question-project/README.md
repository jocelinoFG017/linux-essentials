# Quiz Linux Essentials

Aplicação local em Flask e SQLite para cadastrar perguntas, montar quizzes aleatórios e corrigir respostas.

## Funcionalidades

- Cadastro de perguntas de texto e múltipla escolha
- Validação dos campos antes da gravação
- Listagem das perguntas cadastradas
- Quiz aleatório com até cinco perguntas
- Correção imediata, pontuação e exibição do gabarito
- Banco SQLite criado automaticamente

## Instalação

Execute a partir da raiz do repositório:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r 06-question-project/requirements.txt
cd 06-question-project
flask --app app run --debug
```

Acesse `http://127.0.0.1:5000/`.

O banco fica em `instance/banco.db`. Para garantir que as tabelas existam sem apagar dados:

```sh
flask --app app init-db
```

O comando antigo também é suportado:

```sh
python config/init_db.py
```

## Testes

Na raiz do repositório, instale as dependências de desenvolvimento:

```sh
python -m pip install -r requirements-dev.txt
cd 06-question-project
python -m pytest
```

Os testes usam um banco temporário e não alteram seus dados locais.

## Observações de segurança

O projeto é destinado a estudo e execução local. Antes de disponibilizá-lo publicamente, adicione autenticação, proteção CSRF, limites de requisição e uma configuração persistente de produção.

## Próximos passos

- Editar e excluir perguntas
- Organizar perguntas por tópicos
- Registrar histórico de resultados
