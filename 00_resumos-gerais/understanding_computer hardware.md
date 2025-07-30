If a hardware system has more than one processor, the system is referred to as a multiprocessor. If more than one processor is combined into a single overall processor chip, then it is called multi-core.

To see which family the CPU of the current system belongs to, use the **arch** command:

For more information concerning the CPU, use the **lscpu** command:

To view the amount of RAM in your system, including the swap space, execute the **free** command.

To view all of the devices connected by the PCI bus, the user can execute the **lspci** command.
 -k -> mostra os kernels de cada dispositivo

To display the devices connected to the system via USB, execute the **lsusb** command:

Tipos de partição
GPT -> gdisk, cgdisk, sgdisk
MBR -> fdisk, cfdisk, sfdisk

para ambos -> parted e gparted

For hardware to function, the Linux kernel usually loads a driver or module. Use the **lsmod** command to view the currently loaded modules:

....