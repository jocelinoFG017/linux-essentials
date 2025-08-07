#!/bin/bash

# Teste se o script aceita múltiplos argumentos

if [ $# -eq 0 ]
then
    echo "Nenhum argumento fornecido. Por favor, forneça pelo menos um argumento."
    exit 1
else
    echo "Argumentos fornecidos: $@"
    exit 0
fi