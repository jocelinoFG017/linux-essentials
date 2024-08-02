When talking about compression, there are two types:

    Lossless: No information is removed from the file. Compressing a file and decompressing it leaves something identical to the original.
    Lossy: Information might be removed from the file. It is compressed in such a way that uncompressing a file will result in a file that is slightly different from the original. For instance, an image with two subtly different shades of green might be made smaller by treating those two shades as the same. Often, the eye can’t pick out the difference anyway.


GZIP
gzip

gzip namefile/directory

-l mostra as informações de compressão
ex: gzip -l filename.gz

Para descomprimir utiliza-se o gunzip ou gzip -d

ARCHIVING

CREATE MODE
Creating an archive with the tar command requires two named options:

tar -c [-f ARCHIVE] [OPTIONS] [FILE...]
-c  Create an archive
-f use archive file
-z Compress (or decompress) an archive using the gzip command.

Ao utilizar o bzip2 troca-se o -z por -j

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


