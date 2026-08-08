# Regras do projeto

## 1. Versionamento do GitHub Pages

Sempre que um commit contiver qualquer alteração no projeto, o contador do atributo `github_pages_version` no arquivo `_config.yml` deverá ser incrementado em `0.01`.

O incremento deverá ocorrer **uma única vez por commit**, independentemente da quantidade de arquivos ou partes do projeto alteradas nesse commit.

Exemplo:

```yaml
# Antes da alteração
github_pages_version: 0.35

# Depois da alteração
github_pages_version: 0.36
```

## 2. Mensagem de commit

Ao final de cada solicitação que resultar em alterações nos arquivos do projeto, deverá ser gerada uma mensagem de commit que descreva de forma clara e objetiva as mudanças realizadas.
