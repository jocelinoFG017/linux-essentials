Ignora a pasta venv na saída
```sh
tree -I venv
```
Ignora a pasta venv na saída e envia a saída para o arquivo tree.txt dentro de 07-testes-gerais
```sh
tree -I venv > 07-testes-gerais/tree.txt
```
obs: por padrão o tree roda na pasta atual em que você está