"""Inicializador compatível com o comando antigo do projeto."""

import sys
from pathlib import Path


PROJECT_DIR = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PROJECT_DIR))

from app import create_app, init_database  # noqa: E402


app = create_app()
with app.app_context():
    init_database()
    print(f"Banco inicializado em {app.config['DATABASE']}")
