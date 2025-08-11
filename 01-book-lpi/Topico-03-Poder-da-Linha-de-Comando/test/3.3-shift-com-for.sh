#!/bin/bash

# for loop com shift

  if [ $# -eq 0 ]
    then
        echo "Nenhum argumento fornecido. Por favor, forneça pelo menos um argumento."
        exit 1
    else
        echo -n "Hello $1"
        shift
        for username in $@
        do
            echo -n ", and $username"
        done
        echo "!"
        exit 0
    fi
# Ao usar -n com echo , suprimimos a nova linha após a impressão. Isso significa que todos os
#ecos serão impressos na mesma linha, e a nova linha será impressa somente após o ! na linha
#16.