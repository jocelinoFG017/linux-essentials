Quando falamos sobre compressão, há 2 tipos:

    Lossless(Sem perda): Nenhuma informação é removida do arquivo. Compactar um arquivo e descompactá-lo deixa-o idêntico ao original.
    
    Lossy(Com perda): As informações podem ser removidas do arquivo. Ele é compactado de tal forma que a descompactação de um arquivo resultará em um arquivo ligeiramente diferente do original. Por exemplo, uma imagem com dois tons de verde sutilmente diferentes pode ficar menor tratando esses dois tons como iguais. Muitas vezes, o olho não consegue perceber a diferença de qualquer maneira.

GZIP

Comando
    **gzip**

Exemplo de uso:
    **gzip** namefile/directory

**-l** mostra as informações de compressão
ex: gzip **-l** filename.gz

Para descomprimir utiliza-se o **gunzip** ou **gzip -d**

ARCHIVING(compactar)
Lembre-se: compactar != Comprimir

CREATE MODE
Criar um arquivamente com o comando tar requer 2 opções nomeadas:

tar -c [-f ARCHIVE] [OPTIONS] [FILE...]
-c  Cria um arquivamento
-f  usa um arquivamento de arquivo
-z  Comprime ou descomprime um arquivo usando o comando **gzip**

Ao utilizar o **bzip2** troca-se o **-z** por **-j**

LIST MODE

tar -t [-f ARCHIVE] [OPTIONS]

Given a tar archive, compressed or not, you can see what’s in it by using the -t option. The next example uses three options:

-t list the files in an archive
-j Decompress with bzip2 command
-f Operate on the given archive


EXTRACT MODE
tar -x [-f ARCHIVE] [OPTIONS]

-x 	Extract files from an archive.
-j 	Decompress with the bzip2 command.
-f ARCHIVE 	Operate on the given archive.
-v verbosely list the file processed



ZIP FILES
zip [OPTIONS] [zipfile [file…]]
The zip command will not recurse into subdirectories by default

-r recursividade


To view the contents of a zip archive, use with the -l option with the unzip command:

unzip -l filename.zip

----- 
Para adicionar arquivos a um arquivo .tar utiliza-se -r
tar -rvf 


