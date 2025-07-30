18...
setuid -> 4000

To add the setgid permission numerically, add 2000 to the file's existing permissions (assume in the following example that the directory originally had 775 for its permissions):

chmod 2775 <file|directory>

To remove the setgid permission symbolically, run:

chmod g-s <file|directory>

To set the sticky bit permission symbolically, execute a command like the following:

chmod o+t <directory>

To set the sticky bit permission numerically, add 1000 to the directory's existing permissions (assume the directory in the following example originally had 775 for its permissions):

chmod 1775 <file|directory>

To remove the sticky permission symbolically, run:

chmod o-t <directory>

Hard LINKS


To create hard links, the **ln** command is used with two arguments. The first argument is an existing file name to link to, called a target, and the second argument is the new file name to link to the target.

ln target link_name

When the **ln** command is used to create a hard link, the link count number increases by one for each additional filename:

sysadmin@localhost:~$ ln file.original file.hard.1
sysadmin@localhost:~$ ls -li file.*
278772 -rw-rw-r--. 2 sysadmin sysadmin 5 Oct 25 15:53 file.hard.1
278772 -rw-rw-r--. 2 sysadmin sysadmin 5 Oct 25 15:53 file.original


Symbolic Links


To create a symbolic link, use the -s option with the ln command:

ln -s target link_name

sysadmin@localhost:~$  ln -s /etc/passwd mypasswd
sysadmin@localhost:~$  ls -l mypasswd
lrwxrwxrwx. 1 sysadmin sysadmin 11 Oct 31 13:17 mypasswd -> /etc/passwd



**Hard links X soft links**
Advantage: Hard links don’t have a single point of failure.
Advantage: Soft links are easier to see.
Advantage: Soft links can link to a directory.

----------------------------------------------
You cannot create hard links to directories. Also, a hard link to a file must exist within the same filesystem (partition) as the file that it links to.

The -s option for the ln command creates a symbolic link instead of a hard link. 


..../