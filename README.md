# 🐧 Linux Essentials — Guia de Estudos

[![CI](https://github.com/jocelinoFG017/linux-essentials/actions/workflows/ci.yml/badge.svg)](https://github.com/jocelinoFG017/linux-essentials/actions/workflows/ci.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-brightgreen)](https://jocelinofg017.github.io/linux-essentials/)
[![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-blue.svg)](license.md)

Material em português para estudar os tópicos da certificação Linux Essentials (LPI), com explicações, exemplos de terminal, exercícios e um quiz experimental.

🌐 **Site:** https://jocelinofg017.github.io/linux-essentials/

## Conteúdo

O guia está organizado nas cinco áreas principais:

1. Comunidade Linux e software livre
2. Uso da linha de comando e do sistema de arquivos
3. Compactação, processamento de texto e scripts
4. Sistema operacional, hardware, armazenamento e redes
5. Usuários, grupos, permissões e arquivos especiais

Os materiais complementares incluem cronograma de estudos, glossário, comandos úteis, errata e links de referência.

## Estrutura do repositório

```text
linux-essentials/
├── _layouts/                     # Layout Jekyll
├── assets/                       # CSS, JavaScript e imagens do site
├── 01-book-lpi/                  # Conteúdo principal do guia
├── 02-udemy-course/              # Anotações complementares
├── 03-cisco-academy/             # Anotações complementares
├── 04-challenges/                # Exercícios
├── 05-materiais-complementares/  # Glossário, cronograma e referências
├── 06-question-project/          # Aplicação Flask do quiz
├── scripts/                      # Validações usadas pela CI
├── _config.yml                   # Configuração do Jekyll
└── index.md                      # Página inicial do site
```

## Executar o site localmente

Pré-requisitos: Ruby, Bundler e Python 3.

```sh
bundle install
bundle exec jekyll serve
```

Abra `http://localhost:4000/linux-essentials/`.

O site usa Jekyll. Não adicione `.nojekyll` ou uma segunda página `index.html`, pois isso impede o processamento do layout e das URLs geradas.

## Executar o quiz

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r 06-question-project/requirements.txt
cd 06-question-project
flask --app app run --debug
```

Abra `http://127.0.0.1:5000/`. O banco é criado automaticamente em `06-question-project/instance/banco.db` e não é versionado.

Veja mais detalhes no [README do quiz](06-question-project/README.md).

## Testes

Instale as dependências de desenvolvimento e execute:

```sh
python -m pip install -r requirements-dev.txt
cd 06-question-project
python -m pytest
```

Para validar o site:

```sh
bundle exec jekyll build --strict_front_matter
python3 scripts/check_site_links.py _site --baseurl /linux-essentials
```

A GitHub Actions executa esses testes, valida os scripts Shell e verifica problemas de whitespace em cada push e pull request.

## Contribuição e segurança

Leia [contributing.md](contributing.md) antes de enviar alterações. Vulnerabilidades ou informações sensíveis devem seguir o processo descrito em [security.md](security.md), sem exposição em issues públicas.

## Licença

Distribuído sob a [licença MIT](license.md).
