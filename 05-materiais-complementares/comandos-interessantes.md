---
layout: default
title: Comandos interessantes
---

# Comandos interessantes

Ignorar a pasta `venv` na saída:
```sh
tree -I venv
```
Ignorar a pasta `venv` na saída e enviar o resultado para o arquivo `tree.txt`, dentro de `07-testes-gerais`:
```sh
tree -I venv > 07-testes-gerais/tree.txt
```
**Observação:** por padrão, o `tree` é executado na pasta atual.

Ignorar várias pastas com o `tree`:
```sh
tree -I 'venv|assets|_layouts|images|00-resumos-gerais|tests|questions' > 07-testes-gerais/tree.txt
```

<div class="nav-buttons single-button">
  <a href="/linux-essentials/05-materiais-complementares/cronograma-de-estudos" class="btn btn-back">Próximo</a>
</div>
