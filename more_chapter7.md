In Linux, everything is considered a file.

caminhos absolutos iniciam com slash /
absolutos não tem slash no inicio

.. volta uma pasta/ volta para pasta pai
. representa o diretório atual

File Type

d 	directory 	A file used to store other files.
- 	regular file 	Includes readable files, images     files, binary files, and compressed files.
l 	symbolic link 	Points to another file.
s 	socket 	Allows for communication between processes.
p 	pipe 	Allows for communication between processes.
b 	block file 	Used to communicate with hardware.
c 	character file 	Used to communicate with hardware.

ls -R -> lista de forma recursiva,


File Globbing

Asterisk *
is used to represent zero or more of any character in a filename. 

The question mark ? character represents any single character. Each question mark character matches exactly one character, no more and no less.

The bracket [] characters are used to match a single character by representing a range of characters that are possible match characters. 


The exclamation point ! character is used in conjunction with the square brackets to negate a range. For example, the pattern /etc/[!DP]* matches any file that does not begin with a D or P.

Copying files
The cp command is used to copy files.
cp source destination

-v é um modo verboso,

-i previne sobreescrita de arquivos, só apresenta uma confirmação na tela.(imagina se for 100 arquivos???, por isso tem o -n)

-n To answer n to each prompt automatically, use the -n option. It stands for no clobber, or no overwrite.

-r copia recursivamente, permitindo a copia de diretórios

-p preserva os atributos do arquivo

MOVE FILES
The mv command is not just used to move a file, but also to rename a file.
mv source destination

-i Interactive: Ask if a file is to be overwritten.
-n No Clobber: Do not overwrite a destination file's contents.
-v Verbose: Show the resulting move.

CREATING FILES

touch
cria um arquivo vazio

Removing FILES

rm
deleta um arquivo
-i pergunta se realmente quer deletar

rm -r
deleta recursivamente, permitindo a deleção de diretórios.
rmdir
deleta apenas diretórios vazios

CreatING DIRECTORies
mkdir
create a new directory


