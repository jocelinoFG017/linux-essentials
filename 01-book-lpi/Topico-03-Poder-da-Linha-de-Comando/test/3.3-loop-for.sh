#!/bin/bash

# Exemplo de loop for

FILES="/usr/sbin/accept /usr/sbin/pwck usr/sbin/chroot"

for file in $FILES
do 
    ls -lh $file
done
