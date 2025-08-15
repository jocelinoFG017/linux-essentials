
| COMANDO     | DESCRIÇÃO |
| :----:      | ----------- |
| **cat**         | Mostra o conteudo de um arquivo, Exibe o conteúdo completo do arquivo no terminal. |
| **head**        | Mostra as 10 **primeiras** linhas de um arquivo       |
| **tail**        | Mostra as 10 **ultimas** linhas de um arquivo          |
| **nl**          | Adiciona o numero de linhas na saída        |
| **less**        | Utilizado para paginação, Permite visualizar o conteúdo do arquivo em uma interface paginada (útil para arquivos longos).       |
| **more**        | Utilizado para paginação        |
| **wc**          | Provê o Nº de linhas , palavras e bytes para um arquivo e o total de linhas se mais de um arquivo for especificado       |
| **cut**         | Extrai colunas de um texto de um arquivo        |
| **grep**        | Filtrar linhas e/ou a saída de outro comando, ele o conteúdo de arquivos(de pastas não)        |
| **tr**          | Aceita entrada do teclado, traduz os caracteres e então redireciona-os para a saída        |
| **fgrep**       | É utilizado para combinar caracteres literais, ignorando significados especiais de expressões regulares        |
|   **top**       | Comando utilizado para ver processos em tempo real        |
| **pstree**      | Visualizar a árvore de processos        |
| **ps**          | Mostra os processos atuais rodando no shell atual        |
| **free**        | Utilizado para ver a memória utilizada pelo sistema       |
| **journalctl**  | Visualizar os logs de journal-based        |
| **dmesg**       | ver o kernel ring buffer       |
| **arch**        | Ver a familia do CPU       |
| **lscpu**       | Visualizar mais informações sobre o CPU        |
| **lscpi**       | Ver todos os dispositivos conectados na PCI bus        |
| **lsusb**       | Visualizar os dispositivos USB conectados        |
| **lsmod**       | Ver os módulos carregados atualmente        |
| **sudo**        | Permite rodar o shell como usuário root        |
| **id**          | Utilizado para mostrar informações do usuário e grupo de um usuário especifico        |
| **w**           | Provê uma lista mais detalhada sobre os usuários atuais no sistema |
| **who**         | Mostra uma lista de usuários atualmente logados no sistema e quando eles logaramVisualizar os logs de journal-based        |
| **last**        | Visualizar os dados dos últimos logins do usuário atual de forma mais detalhada do que o comando **who**       |
| **chmod**       | Modificar permissoes dos arquivos        |
| **chown**       | Permite o usuário root mudar o proprietário de arquivos e diretorios       |
| **ln**          | Criar links/ponteiros para outros arquivos(atalhos)        |
| **newgrp**      | Utilizado para mudar o grupo primário        |
| **chgrp**       | Utilizado para mudar o proprietário do grupo        |
| **stat**        | Mostra informações mais detalhadas sobre o arquivo incluindo UID e GID       |
| **umask**       | Usado para determinar permissões padrão que são definidas quando um arquivo ou diretório é criado       |
| **journalctl**  | Visualizar os logs de journal-based        |
| **read**        | Lê um entrada do usuário        |
| **ls**          | Listar arquivos do diretório atual        |
| **mkdir**       | Criar uma pasta/diretório        |
| **touch**       | Criar um arquivo        |
| **vi**          | vi seguido do nome do arquivo, abre o editor vi para editar esse arquivo     |
| **echo**        | Gera texto no terminal        |
| **type**        | Mostra como um comando específico é executado(interno ou externo).        |
| **unset**        | Remove uma variável      |
| **env**          | Exibe todas as variáveis de ambiente      |
| **which**        | Informa local onde está armazenado um comando ou variável      |
| **tree**        | Exibe uma lista hierárquica de uma árvore de diretórios      |
| **pwd**        | Mostra a localização/caminho do diretório atual      |
| **mv**        | serve para mover e renomear arquivos.      |
| **chsh**        | Utilizado para trocar o shell      |


#### Comandos de BUSCA

| Comando  | Descrição        |
|----------|------------------|
| **apt-cache search package_name**  | usado para procurar por pacotes e listar informações sobre os pacotes disponíveis        |
| **apt search package_name**        | Faz a mesma coisa que o comando anterior, a diferença é que a saída é mais descritiva e organizada       |
| **locate**        | Procura no banco de dados por arquivos com um nome específico       |
| **find**          | Comando de busca, procura recursivamente        |
| ****  | Visualizar os logs de journal-based        |
| ****  | Visualizar os logs de journal-based        |
| ****  | Visualizar os logs de journal-based        |

OBS: Ao usar o locate em arquivos criados recentemente, é preciso usar antes o comando updatedb para atualizar o banco de dados de busca;
OBS2: Quando não passamos nenhuma opção no find, ele mostra uma lista de todos os arquivos, diretórios e subdiretórios do seu diretório atual

#### Comandos de INSTALAÇÃO e ATUALIZAÇÃO

| Comando  | Descrição        |
|----------|------------------|
| **sudo apt-get install package_name**  | instala o pacote com os privilégios de root       |
| **sudo apt install package_name**      | Faz a mesma coisa que o comando anterior com a ausência do get     |
| **sudo apt upgrade**                   | Atualiza um ou mais pacotes que tenham uma atualização disponível. Este comando não espera argumentos depois de upgrade( ex: sudo apt upgrade firefox, o firefox aqui é inútil, poderia ser até batata-frita, se o firefox não tiver atualizações, mas o brave tiver, esse comando(sudo apt upgrade firefox) vai atualizar o brave)        |
| **sudo apt install --only-upgrade package_name**              | Atualiza um pacote específico (ex: sudo apt install --only-upgrade firefox, vai atualizar SOMENTE o firefox)       |
| **sudo apt dist-upgrade**              | Atualiza somente o kernel       |
| **sudo apt -f install**                | Instala as dependencias desencontradas de algum pacote que não pode ser instalado por causa de outras bibliotecas requeridas.EX(quero instalar o docker, não consigo por que é necessário que biblioteca X seja instalada antes)       |
| **updatedb**  | Atualiza o banco de dados do comando locate|


obs01 - O comando...
```sh
    sudo apt -f install
```
Abreviadamente é o mesmo comando que:
```sh
    sudo apt --fix-broken install
```

#### Comandos de REMOÇÃO

| Comando  | Descrição        |
|----------|------------------|
| **sudo apt-get remove package_name**  | remove o pacote instalado no sistema, mas os arquivos de configuração dos pacotes removidos são mantidos no sistema e podem ser utilizados novamente se o pacote for reinstalado no futuro.    |
| **sudo apt remove package_name**      | Faz a mesma coisa que o comando anterior com a ausência do get       |
| **sudo apt purge package_name**       | Remove o pacote e os arquivos de configuração      |
| **sudo apt autoremove**               | Remove as bibliotecas não utilizadas por algum programa      |
| **rm**        | Por padrão o rm sozinho remove somente arquivos     |
| **rmdir**        | Serve apenas para remover diretórios vazios      |
| **rm -r**        | remove recursivamente arquivos e diretórios      |

#### Comandos de CÓPIA

| Comando  | Descrição        |
|----------|------------------|
| **cp**         | Por padrão só funciona em arquivo individuais    |
| **cp -r**        | O uso da flag -r permite a cópia de diretórios      |

#### Comandos de AJUDA
O diretório **/usr/share/doc** armazena grande parte da documentação.

| Comando  | Descrição        |
|----------|------------------|
| **man**         | Exibe a página de manual do comando    |
| **help**        | ---      |
| **info**        | Exibe a página de informações do comando   |

#### Comandos de EMPACOTAMENTO

| Comando  | Descrição        |
|----------|------------------|
| **tar**        | ---      |
| ****        | ---      |

#### Comandos para COMPRIMIR

| Comando  | Descrição        |
|----------|------------------|
| **bzip2 file_name**        | Comprimi o arquivo no formato bzip2      |
| **xz file_name**           | Comprimi o arquivo no formato xz     |
| **gzip file_name**         | Comprimi o arquivo no formato bgzip      |
| **zip -r new_file_name.zip file_or_folder_name**          | Comprimi um arquivo ou pasta no formato zip      |

#### Comandos para visualização e Debug de Arquivos
| Comando  | Descrição        |
|----------|------------------|
| **cat -n**        | Mostra o conteúdo do arquivo com as linhas      |

#### Comandos de Componentes de Hardware
| Comando  | Descrição        |
|----------|------------------|
| **free -m**        | Exibe a memória RAM utilizada em Megabytes      |
| **lscpu**          | Exibe informações detalhadas do CPU      |
| **lsblk**          | Lista dispositivos de bloco disponíveis     |

#### Comandos de Processos
| Comando  | Descrição        |
|----------|------------------|
| **top**        | -     |
| **ps**        | -     |
| **uptime**        | -     |

#### Comandos de Redes
| Comando  | Descrição        |
|----------|------------------|
| **ip link show**        | Exibe uma lista de todas as interfaces de rede disponíveis e seus endereços da camada de link     |
| **ip addr show**        | Verificar endereços IP|
| **ip addr add endereco.ip/mascara.de.rede dev ens33**         | Adiciona o endereço IP  a interface ens33|
| **ping -c 3 endereco.ip**        | Verifica se um dispositivo está acessível, depois de 3 solicitações o comando é parado     |
| **ip route show**        | lista a tabela atual de roteamento IPv4    |
| **ip route add default via endereco.ip**        | Adiciona/configura uma rota padrão IPv4    |
| **host nome.do.site**        | Realiza uma pesquisa de DNS     |
| **dig nome.do.site**        | Realiza uma pesquisa de DNS mais detalhada    |
| **ss -t**        | Exibe todos os sockets em um computador Linux   |


#### Comandos de Contas e usuários
| Comando  | Descrição        |
|----------|------------------|
| **id**        | Lista as informações atuais do usuário no CLI.     |
| **groups**        | Lista as os grupos do sistema.     |
| **last**        | Lista a última vez que os usuários logaram no    |
| **lastb**        | Lista as tentativas mal-sucedidas de login    |
| **who**        | Lista somente os logins ativos no sistema    |
| **w**        | Lista somente os logins ativos no sistema com mais detalhes   |
| **chfn**        | Atualizar as informações no campo GECOS    |

#### Comandos para ADICIONAR e REMOVER usuários e grupos

| Comando  | Descrição        |
|----------|------------------|
| **useradd nome_nova_conta**        | Adiciona um nova conta de usuário    |
| **userdel  nome_conta**        | Remove um nova conta de usuário    |
| **passwd  nome_conta**        | Adiciona uma senha a conta de usuário    |
| **groupadd  nome_grupo**        | Cria um novo grupo    |
| **groupdel nome_grupo**        | Remove um grupo    |
| **groupmode nome_grupo**        | Mudar o nome de um grupo ou gid(depende da flag usada)    |


#### Comandos permissões de ARQUIVOS

| Comando  | Descrição        |
|----------|------------------|
| **chmod**        |Modificar permissoes dos arquivos     |
| **chmod -R**        |Modificar permissoes dos arquivos recursivamente(inclui arquivo, diretório e subdiretórios)    |
| **chown**        |Modificar proprietário de arquivos ou diretórios     |
| **chgrp**        |Alterar somente o grupo proprietário    |

