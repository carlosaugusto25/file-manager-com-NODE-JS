import fileManager from './fileManager.js'
import readlineSync from 'readline-sync';
import path from 'path';
import url, { fileURLToPath } from 'url';

async function main(){
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const baseDir = path.join(__dirname, 'my_files');
    fileManager.createDirectory(baseDir);

    while(true){
        console.log('\nMenu:');
        console.log('1. Criar arquivo');
        console.log('2. Listar arquivos');
        console.log('3. Ler arquivo');
        console.log('4. Escrever arquivo');
        console.log('5. Deletar arquivo');
        console.log('6. Sair');

        const choice = readlineSync.question('Escolha uma opcao: ');

        try {
            switch(choice){
                case '1':
                    const fileName = readlineSync.question('Digite o nome do arquivo: ');
                    const fileContent = readlineSync.question('Digite o conteudo do arquivo ou (deixe em branco): ');
    
                    const createFilePath = path.join(baseDir, fileName);
                    const fileMessage = await fileManager.createFile(createFilePath, fileContent);
    
                    console.log(fileMessage);
                    break;
                case '2':
                    const files = await fileManager.listFiles(baseDir);
                    console.log('Arquivos no diretório:', files);
                    break;
                case '3':
                    const readFileName = readlineSync.question('Digite o nome e extensão do arquivo: ');
                    const readFilePath = path.join(baseDir, readFileName);
                    const content = await fileManager.readFiles(readFilePath);
                    console.log('Conteúdo do arquivo:', content);
                    break;
                case '4':
                    const writeFileName = readlineSync.question('Digite o nome e extensão do arquivo: ');
                    const writeFilePath = path.join(baseDir, writeFileName);
                    const newContent = readlineSync.question('Digite o conteudo do arquivo: ');
    
                    const writeMessage = await fileManager.writeFiles(writeFilePath, newContent);
    
                    console.log(writeMessage);
                    break;
                case '5':
                    const deleteFileName = readlineSync.question('Digite o nome e extensão do arquivo: ');
                    const deleteFilePath = path.join(baseDir, deleteFileName);
                    const deleteMessage = await fileManager.deleteFiles(deleteFilePath);
                    console.log(deleteMessage);
                    break;
                case '6':
                    console.log('Saindo...');
                    return;
                default:
                    console.log('Opcao invalida');
            }
        } catch (error) {
            console.error(error);
        }
        
    }
}

main();