# Regras do projeto

## Versionamento do GitHub Pages

Sempre que um commit contiver qualquer alteração no projeto, o contador do atributo `github_pages_version` no arquivo `_config.yml` deverá ser incrementado em `0.01`.

O incremento deverá ocorrer **uma única vez por commit**, independentemente da quantidade de arquivos ou partes do projeto alteradas nesse commit.

Exemplo:

```yaml
# Antes da alteração
github_pages_version: 0.35

# Depois da alteração
github_pages_version: 0.36
```
