Terminologia Básica

Host
Network
Internet
WI-fi
Server
Service
CLient
Router

Caracteristicas da rede

Packet
Ip Address
Mask
Hostname
URL -> Uniform Resource Locator
DHCP -> Dynamic Host Configuration Protocol
DNS
Ethernet
TCP/IP (Transmission Control Protocol/Internet Protocol)


Ip ADdress

IPv4 e IPv6
IPv4
4 conjuntos de numeros no padrão 8-bit(de 0 a 255)
ex: 192.1268.10.120

IPv6
128-bit addrees

NAT -> Net Addres Translation
Porting


DNS
The address of the DNS server is stored in the /etc/resolv.conf file. 
-----------
Name resolution on a Linux host is accomplished by 3 critical files: the /etc/hosts, /etc/resolv.conf and /etc/nsswitch.conf files. Together, they describe the location of name service information, the order in which to check resources, and where to go for that information.

Comandos de rede

**ifconfig**
**ip**
ip [OPTIONS] OBJECT COMMAND

While ifconfig is limited primarily to modification of networking parameters, and displaying the configuration details of networking components, the ip command branches out to do some of the work of several other legacy commands such as route and arp.

To view a table that describes where network packages are sent, use the **route** command:
route -n -> mostra somente numeros na saída do comando

ip route or ip route show mostram as mesmas informações do comando route, de forma visualmente diferente.


**ping**
By default, the ping command continues sending packages endlessly.
To limit how many pings to send, use the -c option followed by a number indicating how many iterations you desire. 


**netstat**
The netstat command is a powerful tool that provides a large amount of network information. 

The **ss** command is designed to show socket statistics and supports all the major packet and socket types


**dig** performs queries on the DNS server to determine if the information needed is available on the server.

**ssh**
The ssh command allows you to connect to another machine across the network, log in and then perform tasks on the remote machine.

