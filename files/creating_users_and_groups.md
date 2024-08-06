Groups

The groupadd command can be executed by the root user to create a new group. 
-g pode ser usada par especificar um id(gid) para para o novo grupo

-r adiciona grupos em ids reservados 1-999

The **groupmod** command can be used to either change the name of a group with the -n option or change the GID for the group with the -g option.


mudar o nome de um grupo muda o proprietário do arquivo enquanto mudar o gid do grupo torna todos os arquivos associados ao grupo sem grupo, chamados orphaned files.

if you decide to delete a group with the **groupdel** command, be aware that any files that are owned by that group will become orphaned.
-------------------------------------------------
USER
The -D option to the **useradd** command allows you to view or change some of the default values used by the useradd command. The values shown by useradd -D can also be viewed or updated by manipulating the /etc/default/useradd file;
-m refere-se ao diretório home
-c adiciona comentário

The -f option to the **useradd** command allows you to use a different INACTIVE value than the default when creating a new user 

The -e option to the **useradd** command allows you to use a different EXPIRE value than the default when creating a new user account.

The -s option to the **useradd** command allows you to use a different login shell than the default when creating a new user account.

The -k option to the **useradd** command allows you to use a different SKEL directory than the default when creating a new user account.

exemplo:
useradd -G research -c 'Linux Student' -m student
root@localhost:~# grep student etc/passwd                  
student:x:1002:1002:Linux Student:/home/student:/bin/sh       
------------------------------
The user can execute the passwd command, the administrator can execute the passwd command providing the username as an argument, or graphical tools are also available.
- -------------------------------------------
principais comandos
    
    Create a new group with the **groupadd** command
    Make changes to groups using the **groupmod** command
    Create a new user with the **useradd** command
    Set and reset a user's password with the **passwd** command
    Make changes to the user account with the **usermod** command


