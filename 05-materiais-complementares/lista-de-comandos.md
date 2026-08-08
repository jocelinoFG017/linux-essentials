---
layout: default
title: Lista de comandos
---

# Lista de comandos


| COMANDO     | DESCRIÇÃO |
| :----:      | ----------- |
| **cat**         | Exibe o conteúdo completo de um arquivo no terminal. |
| **head**        | Mostra as 10 **primeiras** linhas de um arquivo       |
| **tail**        | Mostra as 10 **últimas** linhas de um arquivo          |
| **nl**          | Adiciona o número das linhas à saída        |
| **less**        | Permite visualizar o conteúdo de um arquivo em uma interface paginada, útil para arquivos longos.       |
| **more**        | É utilizado para paginação.        |
| **wc**          | Informa o número de linhas, palavras e bytes de um arquivo e o total de linhas se mais de um arquivo for especificado.       |
| **cut**         | Extrai colunas de um texto de um arquivo        |
| **grep**        | Filtra linhas, a saída de outros comandos e o conteúdo de arquivos, mas não de diretórios.        |
| **tr**          | Aceita entrada do teclado, traduz os caracteres e então redireciona-os para a saída        |
| **fgrep**       | É utilizado para combinar caracteres literais, ignorando significados especiais de expressões regulares        |
|   **top**       | É utilizado para ver processos em tempo real.        |
| **pstree**      | Exibe a árvore de processos.        |
| **ps**          | Mostra os processos em execução no shell atual.        |
| **free**        | É utilizado para ver a memória usada pelo sistema.       |
| **journalctl**  | Exibe os logs do journal do systemd.        |
| **dmesg**       | Exibe o buffer de anel do kernel.       |
| **arch**        | Mostra a família da CPU.       |
| **lscpu**       | Visualizar mais informações sobre o CPU        |
| **lspci**       | Mostra todos os dispositivos conectados ao barramento PCI.        |
| **lsusb**       | Visualizar os dispositivos USB conectados        |
| **lsmod**       | Ver os módulos carregados atualmente        |
| **sudo**        | Permite rodar o shell como usuário root        |
| **id**          | É utilizado para mostrar informações do usuário e do grupo de um usuário específico.        |
| **w**           | Provê uma lista mais detalhada sobre os usuários atuais no sistema |
| **who**         | Mostra os usuários conectados ao sistema e o horário de login.        |
| **last**        | Visualizar os dados dos últimos logins do usuário atual de forma mais detalhada do que o comando **who**       |
| **chmod**       | Modifica as permissões dos arquivos.        |
| **chown**       | Permite ao usuário root mudar o proprietário de arquivos e diretórios.       |
| **ln**          | Cria links ou ponteiros para outros arquivos (atalhos).        |
| **newgrp**      | Utilizado para mudar o grupo primário        |
| **chgrp**       | É utilizado para mudar o grupo proprietário.        |
| **stat**        | Mostra informações mais detalhadas sobre o arquivo incluindo UID e GID       |
| **umask**       | Usado para determinar permissões padrão que são definidas quando um arquivo ou diretório é criado       |
| **journalctl**  | Exibe os logs do journal do systemd.        |
| **read**        | Lê uma entrada do usuário.        |
| **ls**          | Listar arquivos do diretório atual        |
| **mkdir**       | Criar uma pasta/diretório        |
| **touch**       | Criar um arquivo        |
| **vi**          | vi seguido do nome do arquivo, abre o editor vi para editar esse arquivo     |
| **echo**        | Gera texto no terminal        |
| **type**        | Mostra como um comando específico é executado (interno ou externo).        |
| **unset**        | Remove uma variável      |
| **env**          | Exibe todas as variáveis de ambiente      |
| **which**        | Informa o local onde está armazenado um comando ou variável.      |
| **tree**        | Exibe uma lista hierárquica de uma árvore de diretórios      |
| **pwd**        | Mostra a localização/caminho do diretório atual      |
| **mv**        | Serve para mover e renomear arquivos.      |
| **chsh**        | Utilizado para trocar o shell      |


#### Comandos de busca

| Comando  | Descrição        |
|----------|------------------|
| **apt-cache search package_name**  | É usado para procurar pacotes e listar informações sobre os pacotes disponíveis.        |
| **apt search package_name**        | Faz a mesma coisa que o comando anterior, a diferença é que a saída é mais descritiva e organizada       |
| **locate**        | Procura no banco de dados por arquivos com um nome específico       |
| **find**          | Comando de busca, procura recursivamente        |
| ****  | Visualizar os logs de journal-based        |
| ****  | Visualizar os logs de journal-based        |
| ****  | Visualizar os logs de journal-based        |

**Observação:** ao usar o `locate` para procurar arquivos criados recentemente, é preciso executar antes o comando `updatedb` para atualizar o banco de dados de busca.
**Observação 2:** quando não passamos nenhuma opção ao `find`, ele mostra uma lista de todos os arquivos, diretórios e subdiretórios do diretório atual.

#### Comandos de instalação e atualização

| Comando  | Descrição        |
|----------|------------------|
| **sudo apt-get install package_name**  | Instala o pacote com privilégios de root.       |
| **sudo apt install package_name**      | Faz a mesma coisa que o comando anterior com a ausência do get     |
| **sudo apt upgrade**                   | Atualiza os pacotes instalados que possuem versões disponíveis. Esse comando não recebe o nome de um pacote específico como argumento.        |
| **sudo apt install --only-upgrade package_name**              | Atualiza somente um pacote específico.       |
| **sudo apt dist-upgrade**              | Atualiza somente o kernel       |
| **sudo apt -f install**                | Corrige dependências ausentes ou incompatíveis que impedem a instalação de um pacote.       |
| **updatedb**  | Atualiza o banco de dados do comando `locate`.|


**Observação:** o comando
```sh
    sudo apt -f install
```
é a forma abreviada de:
```sh
    sudo apt --fix-broken install
```

#### Comandos de remoção

| Comando  | Descrição        |
|----------|------------------|
| **sudo apt-get remove package_name**  | Remove o pacote instalado no sistema, mas mantém seus arquivos de configuração para uma possível reinstalação.    |
| **sudo apt remove package_name**      | Faz a mesma coisa que o comando anterior com a ausência do get       |
| **sudo apt purge package_name**       | Remove o pacote e os arquivos de configuração      |
| **sudo apt autoremove**               | Remove as bibliotecas não utilizadas por algum programa      |
| **rm**        | Por padrão o rm sozinho remove somente arquivos     |
| **rmdir**        | Serve apenas para remover diretórios vazios      |
| **rm -r**        | Remove recursivamente arquivos e diretórios.      |

#### Comandos de cópia

| Comando  | Descrição        |
|----------|------------------|
| **cp**         | Por padrão, só funciona com arquivos individuais.    |
| **cp -r**        | O uso da flag -r permite a cópia de diretórios      |

#### Comandos de ajuda
O diretório **/usr/share/doc** armazena grande parte da documentação.

| Comando  | Descrição        |
|----------|------------------|
| **man**         | Exibe a página de manual do comando    |
| **help**        | ---      |
| **info**        | Exibe a página de informações do comando   |

#### Comandos de empacotamento

| Comando  | Descrição        |
|----------|------------------|
| **tar**        | ---      |
| ****        | ---      |

#### Comandos para comprimir

| Comando  | Descrição        |
|----------|------------------|
| **bzip2 file_name**        | Comprime o arquivo no formato bzip2.      |
| **xz file_name**           | Comprime o arquivo no formato xz.     |
| **gzip file_name**         | Comprime o arquivo no formato gzip.      |
| **zip -r new_file_name.zip file_or_folder_name**          | Comprime um arquivo ou uma pasta no formato zip.      |

#### Comandos para visualização e depuração de arquivos

| Comando  | Descrição        |
|----------|------------------|
| **cat -n**        | Mostra o conteúdo do arquivo com as linhas      |

#### Comandos de componentes de hardware

| Comando  | Descrição        |
|----------|------------------|
| **free -m**        | Exibe a memória RAM utilizada em megabytes.      |
| **lscpu**          | Exibe informações detalhadas da CPU.      |
| **lsblk**          | Lista dispositivos de bloco disponíveis     |
| **arch**           | Mostra a família da CPU.       |
| **lspci**          | Mostra todos os dispositivos conectados ao barramento PCI.       |
| **lsusb**          | Mostra todos os dispositivos conectados via USB      |
| **lsmod**          | Exibe os módulos atuais carregados     |

#### Comandos de processos

| Comando  | Descrição        |
|----------|------------------|
| **top**        | -     |
| **ps**        | -     |
| **uptime**        | -     |

#### Comandos de rede

| Comando  | Descrição        |
|----------|------------------|
| **ip link show**        | Exibe uma lista de todas as interfaces de rede disponíveis e seus endereços da camada de link     |
| **ip addr show**        | Verificar endereços IP|
| **ip addr add endereco.ip/mascara.de.rede dev ens33**         | Adiciona o endereço IP à interface ens33.|
| **ping -c 3 endereco.ip**        | Verifica se um dispositivo está acessível; depois de três solicitações, o comando é interrompido.     |
| **ip route show**        | Lista a tabela atual de roteamento IPv4.    |
| **ip route add default via endereco.ip**        | Adiciona/configura uma rota padrão IPv4    |
| **host nome.do.site**        | Realiza uma pesquisa de DNS     |
| **dig nome.do.site**        | Realiza uma pesquisa de DNS mais detalhada    |
| **ss -t**        | Exibe todos os sockets em um computador Linux   |
| **ifconfig**        | Exibe e configura interfaces de rede (IPs, máscara, MAC, status da interface).    |
| **netstat**        | Exibe informações sobre conexões de rede, tabelas de roteamento, estatísticas de interfaces e portas em uso (TCP/UDP).     |
| **ssh**        | Acessar remotamente outro computador via rede de forma segura, criptografando a comunicação.     |
| **route**        | Mostra e manipula a tabela de rotas do sistema, ou seja, como o Linux decide para onde enviar pacotes de rede.     |


**Nota:** em distribuições Linux mais recentes, o comando `ifconfig` foi substituído pelo comando `ip`. Portanto, é recomendável usar o comando `ip` para gerenciar interfaces de rede. O `netstat`, por sua vez, foi substituído pelo comando `ss`.

#### Comandos de contas e usuários

| Comando  | Descrição        |
|----------|------------------|
| **id**        | Lista as informações atuais do usuário no CLI.     |
| **groups**        | Lista os grupos do sistema.     |
| **last**        | Lista os últimos acessos dos usuários ao sistema.    |
| **lastb**        | Lista as tentativas mal-sucedidas de login    |
| **who**        | Lista somente os logins ativos no sistema    |
| **w**        | Lista somente os logins ativos no sistema com mais detalhes   |
| **chfn**        | Atualizar as informações no campo GECOS    |

#### Comandos para adicionar e remover usuários e grupos

| Comando  | Descrição        |
|----------|------------------|
| **useradd nome_nova_conta**        | Adiciona uma nova conta de usuário.    |
| **userdel nome_conta**        | Remove uma conta de usuário.    |
| **passwd nome_conta**        | Adiciona uma senha à conta de usuário.    |
| **groupadd  nome_grupo**        | Cria um novo grupo    |
| **groupdel nome_grupo**        | Remove um grupo    |
| **groupmod nome_grupo**        | Muda o nome ou o GID de um grupo, dependendo da flag usada.    |


#### Comandos de permissões de arquivos

| Comando  | Descrição        |
|----------|------------------|
| **chmod**        | Modifica as permissões dos arquivos.     |
| **chmod -R**        | Modifica as permissões dos arquivos recursivamente (inclui arquivos, diretórios e subdiretórios).    |
| **chown**        | Modifica o proprietário de arquivos ou diretórios.     |
| **chgrp**        | Altera somente o grupo proprietário.    |

<div class="nav-buttons two-buttons">
  <a href="/linux-essentials/05-materiais-complementares/curiosidades" class="btn btn-back">Anterior</a>
  <a href="/linux-essentials/05-materiais-complementares/lista-de-termos" class="btn btn-back">Próximo</a>
</div>
