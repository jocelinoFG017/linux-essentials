
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
| **find**        | Comando de busca, procura recursivamente        |
| **tr**          | Aceita entrada do teclado, traduz os caracteres e então redireciona-os para a saída        |
| **fgrep**       | É utilizado para combinar caracteres literais, ignorando significados especiais de expressões regulares        |
|   **top**       | Comando utilizado para ver processos em tempo real        |
| **pstree**      | Visualizar a árvore de processos        |
| **ps**          | Mostra os processos atuais rodando no shell atual        |
| **free**        | Utilizado para ver a memoria utilizada        |
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
| **read**  | Lê um entrada do usuário        |
| **ls**  | Listar arquivos do diretório atual        |
| **mkdir**  | Criar uma pasta/diretório        |
| **touch**  | Criar um arquivo        |
| **vi**  | vi seguido do nome do arquivo, abre o editor vi para editar esse arquivo     |

#### Comandos de BUSCA

| Comando  | Descrição        |
|-------------------|----------|
| **apt-cache search package_name**  | usado para procurar por pacotes e listar informações sobre os pacotes disponíveis        |
| **apt search package_name**  | Faz a mesma coisa que o comando anterior, a diferença é que a saída é mais descritiva e organizada       |
| ****  | Visualizar os logs de journal-based        |
| ****  | Visualizar os logs de journal-based        |
| ****  | Visualizar os logs de journal-based        |

#### Comandos de INSTALAÇÃO

| Comando  | Descrição        |
|-------------------|----------|
| **sudo apt-get install package_name**  | instala o pacote com os privilégios de root       |
| **sudo apt install package_name**  | Faz a mesma coisa que o comando anterior com a ausência do get     |
| ****  | Visualizar os logs de journal-based        |
| ****  | Visualizar os logs de journal-based        |

#### Comandos de REMOÇÃO

| Comando  | Descrição        |
|-------------------|----------|
| **sudo apt-get remove package_name**  | remove o pacote instalado no sistema, mas os arquivos de configuração dos pacotes removidos são mantidos no sistema e podem ser utilizados novamente se o pacote for reinstalado no futuro.    |
| **sudo apt remove package_name**  | Faz a mesma coisa que o comando anterior com a ausência do get       |
| **sudo apt purge package_name**  | Remove o pacote e os arquivos de configuração      |
