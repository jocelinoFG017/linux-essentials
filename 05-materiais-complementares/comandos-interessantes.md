---
layout: default
title: Comandos interessantes
---

# Comandos interessantes

Ignora a pasta venv na saída
```sh
tree -I venv
```
Ignora a pasta venv na saída e envia a saída para o arquivo tree.txt dentro de 07-testes-gerais
```sh
tree -I venv > 07-testes-gerais/tree.txt
```
obs: por padrão o tree roda na pasta atual em que você está

Ignorar várias pastas com tree
```sh
tree -I 'venv|assets|_layouts|images|00-resumos-gerais|tests|questions' > 07-testes-gerais/tree.txt
```

<div class="nav-buttons single-button">
  <a href="/linux-essentials/05-materiais-complementares/cronograma-de-estudos" class="btn btn-back">Próximo</a>
</div>
