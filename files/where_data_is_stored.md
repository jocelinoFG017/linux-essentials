/proc -> provê informações sobre os processos, sobre os hardware do sistema e a configuração do kernel atual
 - Alguns comandos que pegam informações desse diretório
> top
> free
> mount
> unmount

**top** -> comando utilizado para ver processos em tempo real

alguns arquivos que proveem informações sobre o kernel atual

/proc/cmdline
/proc/meminfo
/proc/modules

Para ver a arvore de processos utiliza-se o comando 
**pstree**

 By default, the **ps** command only shows the current processes running in the current shell. 

--forest -> mostrar a relação de processos pai e filho(parent and child)

Para ver todos os processos digite ps -ef ou ps aux


/dev -> Provê informações sobre o hardware

/sys -> provê informações sobre os dispositivos de /dev


free -> ver memoria utilizada

-s -> apresenta em tempo real o uso da memoria, deve ser usado com um numero ex: free -s 10
No exemplo vai atualizar o uso da memoria no terminal a cada 10 segundos...



 The standard method for viewing journald-based logs is to use the **journalctl** command.


 /var/log -> quase todos os logs estão nesse diretório.

 The /var/log/dmesg file contains the kernel messages that were produced during system startup

 the **dmesg** command can be used to view the kernel ring buffer,



 Directory 	Contents
/ 	The base of the structure, or root of the filesystem, this directory unifies all directories regardless of whether they are local partitions, removable devices or network shares
/bin 	Essential binaries like the ls, cp, and rm commands, and be a part of the root filesystem
/boot 	Files necessary to boot the system, such as the Linux kernel and associated configuration files
/dev 	Files that represent hardware devices and other special files, such as the /dev/null and /dev/zero files
/etc 	Essential host configurations files such as the /etc/hosts or /etc/passwd files
/home 	User home directories
/lib 	Essential libraries to support the executable files in the /bin and /sbin directories
/lib64 	Essential libraries built for a specific architecture. For example, the /lib64 directory for 64-bit AMD/Intel x86 compatible processors
/media 	Mount point for removable media mounted automatically
/mnt 	Mount point for temporarily mounting filesystems manually
/opt 	Optional third-party software installation location
/proc 	Virtual filesystem for the kernel to report process information, as well as other information
/root 	Home directory of the root user
/sbin 	Essential system binaries primarily used by the root user
/sys 	Virtual filesystem for information about hardware devices connected to the system
/srv 	Location where site-specific services may be hosted
/tmp 	Directory where all users are allowed to create temporary files and that is supposed to be cleared at boot time (but often is not)
/usr 	

Second hierarchy
Non-essential files for multi-user use
/usr/local 	

Third hierarchy
Files for software not originating from distribution
/var 	

Fourth hierarchy
Files that change over time
/var/cache 	Files used for caching application data
/var/log 	Most log files
/var/lock 	Lock files for shared resources
/var/spool 	Spool files for printing and mail
/var/tmp 	Temporary files to be preserved between reboots


Binarios restritos do root

    /sbin
    /usr/sbin
    /usr/local/sbin
    /usr/local/application/sbin
    /opt/application/sbin

Binários especificos do usuário

    /bin
    /usr/bin
    /usr/local/bin
    /usr/local/application/bin
    /opt/application/bin

