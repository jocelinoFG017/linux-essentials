17...
you can use the **newgrp** command to change your current primary group.
ex: newgrp group_name

To change the group owner of an existing file the **chgrp** command can be used.

As a user without administrative privileges, the **chgrp** command can only be used to change the group owner of a file to a group that the user is already a member of:

To change the group ownership of all of the files of a directory structure, use the recursive **-R** option to the **chgrp** command.

he **stat** command displays more detailed information about a file, including providing the group ownership both by group name and GID number:

The **chown** command allows the root user to change the user ownership of files and directories.

tipos de arquivo
- 	A regular file, which may be empty, or contain text or binary data.
d 	A directory file, which contains the names of other files and links to them.
l 	A symbolic link is a file name that refers (points) to another file.
b 	A block file is one that relates to a block hardware device where data is read in blocks of data.
c 	A character file is one that relates to a character hardware device where data is read one byte at a time.
p 	A pipe file works similar to the pipe symbol, allowing for the output of one process to communicate to another process through the pipe file, where the output of the one process is used as input for the other process.
s 	A socket file allows two processes to communicate, where both processes are allowed to either send or receive data.


The **chmod** (change mode) command is used to change permissions on files and directories.

ex: chmod new_permission file_name

Metodo simbólico
u -> usuário owner
g -> grupo owner
o -> outros
a -> para todos

Operadores
+ adicione
- remova
= igual(equals)

r -> read
w -> write
x -> execute

ex: chmod g+w abc.txt
ex: chmod ug+x,o-r abc.txt

you could use the = character, which adds specified permissions and causes unmentioned ones to be removed. For example, to give the user owner only read and execute permissions, removing the write permission:
ex: chmod u=rx abc.txt


Método numérico

4 -> read
2 -> write
1 -> execute


7 -> rwx
6 -> rw-
5 -> r-x
4 -> r--
3 -> -wx
2 -> -w-
1 -> --x

ex: rwxr-xr--
ex: chmod 754 abc.txt


The **umask** command is a feature that is used to determine default permissions that are set when a file or directory is created.


The umask command can be used to display the current umask value:

.../