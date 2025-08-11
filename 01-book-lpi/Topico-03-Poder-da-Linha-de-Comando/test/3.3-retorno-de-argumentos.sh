#!/bin/bash

# Sauda um usuário passado como argumento

if [ $# -eq 1 ]
then    
    username=$1
    echo "Hello_$username"
else
    echo "Somente um argumento é aceito"
fi
echo "Total de argumentos passados: $#"
