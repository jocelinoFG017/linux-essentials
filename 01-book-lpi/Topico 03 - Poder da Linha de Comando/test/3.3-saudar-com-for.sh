#!/bin/bash

if [ $# -eq 0 ]
    then
        echo "Nenhum argumento fornecido. Por favor, forneça pelo menos um argumento."
        exit 1
    else
        for username in $@
        do
            echo "Hello: $username!"
        done
    exit 0
fi
