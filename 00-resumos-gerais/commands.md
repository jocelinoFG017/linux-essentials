
ls -> Lista arquivos e diretórios contidos no diretório atual(padrão). E aceita multiplos argumentos.

O formato de um comando segue esse formato:
    command [options] [arguments]

**Argumentos**
An argument can be used to specify something for the command to act upon.

Ex: ls /home/user/Documents
    arquivo.txt arquivo2.txt

**Opções**
Options can be used with commands to expand or modify the way a command behaves.

Ex: ls -l or ls -la e etc.


Opções do comando ls
    -l -> Lista a forma longa dos arquivos contendo data, tamanho, permissões....
    -a -> Lista arquivos ocultos
    -r -> Lista em ordem reversa
    -h -> Deixa em formato legível o tamanho dos arquivos(Kb, Mb, Gb)

history -> Lista todos os comandos digitados no bash.
    !numeroEmHistory(ex: !2001) -> Você pode "rodar" um comando listado no history digitando ! seguido do número apresentado na listagem do comando.

Para executar último comando executado, digite !! e tecle enter.

echo -> utilizado para mostrar saídas nos terminais

Variáveis Locais e Globais

Variaveis locais são definidas com uma simples atribuição

var1='nome da variavel'

Para mostrar o valor da variavel utiliza-se o comando echo

echo $var1

Para criar um variável global(de ambiente)  utilizamos o export

export var1 
ou
export var='valor da variável'

Para remover um variavel utilize o comando unset

unset var1


Para verificar uma variavel utilizamos o seguinte comando:
env | grep nomedavariavel
ex: env | grep var1
obs: utilizar somente o env, irá listar todas as variaveis de ambiente.

A Variavel PATH
cada diretório listado nela é separado por dois pontos(colon) :
ex: 
/home/sysadmin/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games

De forma detalhada.

/home/sysadmin/bin
/usr/local/sbin
/usr/local/bin
/usr/sbin
/usr/bin
/sbin
/bin
/usr/games


o Comando type
Mostra se um comando é builtin, ou seja, interno. Ou se o comando é externo

O comando alias
An alias can be used to map longer commands to shorter key sequences


alias name=command


ex: 
~$ alias mostrardata="date"
~$ mostrardata
Wed Jul 31 20:03:23 UTC 2024

executar o somente alias, irá mostrar todas as abreviações do sistema.

Funções
Estrutura:
function_name () 
{
   commands
}

exemplo:
my_report(){
    > ls Documents
    > date
}

~$ my_report -> vai listar Documents e mostrar a data atual.



Aspas Simples, duplas e invertida(`)

Simples -> Considera tudo caracter
Dupla -> Considera quase tudo caracter, salvo exceções como variaveis $var, 

Invertida -> são usadas ​​para especificar um comando dentro de um comando
ex: 
date
Wed Jul 31 20:03:23 UTC 2024
echo hoje é date
hoje é date
echo hoje é `date`
hoje é Wed Jul 31 20:03:23 UTC 2024


Ponto e virgula
Pode ser usado para rodar multiplos comando
command1; command2; command3

&& -> Equivale ao AND

command1 && command2

Se o primeiro comando for verdadeiro(der certo) ele roda o segundo comando
, caso contrário o segundo comando não será executado.


pipe duplo || -> equivale ao OR


whoami -> Mostra o usuario atual
uname -> Mostra o sistema utilizado
uname -r -> mostra a versão do kernel
pwd -> The pwd command is used to display your current "location" or current "working" directory.
which -> Use the which command to determine if there is an executable file,


 **Getting help**
 
 man
 ex: 
 man command


By default, there are nine sections of man pages:

    1. General Commands
    2. System Calls
    3. Library Calls
    4. Special Files
    5. File Formats and Conventions
    6. Games
    7. Miscellaneous
    8. System Administration Commands
    9. Kernel Routines

Parametros do man
-f -> mostras os manuais do comando por nome, caso um comando esteja presente em mais de uma seção como é o caso do passwd.
man -f passwd

-k -> apresenta uma breve descrição do que cada comando faz em cada seção

man -k passwd
In some cases you may not remember the exact name of the command. In these cases you can use the -k option to the man command and provide a keyword argument. 

O comando whatis 
É similar ao man -k


O comando whereis
This command searches for commands, source files and man pages in specific locations where these files are typically stored:

o find any file or directory, use the locate command.

To display the info documentation for a command, use the info command.

--help option to the command. This option is useful to learn the basic usage of a command quickly without leaving the command line:



apropos command have no difference with man -k
both will show the same result

man -f and whatis show same result

o comando locate busca em uma base de dados local, algumas vezes é preciso rodar o comando updatedb para atualizar essa base, o updatedb requer acesso de root

The whereis command does not search for just any file, only for commands and man pages.






