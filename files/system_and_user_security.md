The **su** command allows you to run a shell as a different user.
**su [options] [username]**

The **sudo** command allows users to execute commands as another user.
**sudo [options] command**

the /etc directory that contain the account data of the users and groups defined on the system.
 For example, to see if a specific user account has been defined on the system, then the place to check is the /etc/passwd file.

 sysadmin:x:1001:1001:System Administrator,,,,:/home/sysadmin:/bin/bash

 Name
 **sysadmin:**x:1001:1001:System Administrator,,,,:/home/sysadmin:/bin/bash

User ID
 sysadmin:x:**1001**:1001:System Administrator,,,,:/home/sysadmin:/bin/bash

Primary Group ID 
 sysadmin:x:1001:**1001**:System Administrator,,,,:/home/sysadmin:/bin/bash

Comment
 sysadmin:x:1001:1001:**System Administrator,,,,**:/home/sysadmin:/bin/bash

Home Directory
 sysadmin:x:1001:1001:System Administrator,,,,:**/home/sysadmin**:/bin/bash

Shell
 sysadmin:x:1001:1001:System Administrator,,,,:/home/sysadmin:**/bin/bash**

-----------------------------
etc/shadow file contains account information related to the user's password.
**A typical /etc/shadow file would look similar to the following:**
sysadmin:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:16874:5:30:7:60:15050:

Username
**sysadmin**:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:16874:5:30:7:60:15050::

Password
sysadmin:**$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0**:16874:5:30:7:60:15050::

Last Change(Numero de dias desde a ultima alteração de senha)
sysadmin:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:**16874**:5:30:7:60:15050::

Minimum(após trocar a senha, nesse caso deve-se esperar 5 dias para poder trocar novamente)
sysadmin:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:16874:**5**:30:7:60:15050::

Maximum(numero maximo de dias de validade da senha atual, após esses dias será necessário trocar de senha)
sysadmin:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:16874:5:**30**:7:60:15050::

Warn(indica quantos dias antes da senha expirar(maximum) que o sistema irá alertar o usuário, nesse caso. O usuário será avisado para trocar de senha 7 dias antes dos 30 dias definidos para trocar a senha)
sysadmin:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:16874:5:30:**7**:60:15050::

Inactive
Se o usuário ignorar os avisos e exceder o prazo da senha, sua conta será bloqueada. Nesse caso, o campo inativo proporciona ao usuário um período de “carência” em que sua senha pode ser alterada, mas apenas durante o processo de login.

Se o campo inativo estiver definido como 60, o usuário terá 60 dias para alterar para uma nova senha. Se não o fizerem, o administrador será necessário para redefinir a senha do usuário.


sysadmin:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:16874:5:30:7:**60**:15050::

Expire
sysadmin:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:16874:5:30:7:60:**15050**::

This field indicates the day the account will expire.An expired account is locked, not deleted, meaning the administrator can reset the password to unlock the account.

Reserved
sysadmin:$6$c75ekQWF$.GpiZpFnIXLzkALjDpZXmjxZcIll14OvL2mFSIfnc1aU2cQ/221QL5AX5RjKXpXPJRQ0uVN35TY3/..c7v0.n0:16874:5:30:7:60:15050**::**
Currently not used, this field is reserved for future use. 

System accounts

UID 1-499

Group accounts

Structure
 Group Name: Password Placehorder: GID: User List
**mail:x:12:mail,postfix**
----------------------------
 The **id** command is used to print user and group information for a specified user. 

-g show the primary group
-G show all groups

The **who** command displays a list of users who are currently logged into the system, where they are logged in from, and when they logged in.

The **w** command provides a more detailed list about the users currently on the system than the who command. 

The **last** command reads the entire login history from the /var/log/wtmp file and displays all logins and reboot records by default. 



Consider This

The who command reads from the /var/log/utmp file which logs current users, while the last command reads from the /var/log/wtmp file, which keeps a history of all user logins.
