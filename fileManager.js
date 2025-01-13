//tipo de importação CommonJS
import fs from 'fs' // file system

function createDirectory(dirPath){
    return new Promise((resolve, reject) => { //função de callback
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if(err){
                reject(err)
            }else{
                resolve(`Directory '${dirPath}' created successfully`)
            }
        })
    })
}

function createFile(filePath, content = ''){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err){
                reject(err)
            }else{
                resolve(`File '${filePath}' created successfully`)
            }
        })
    })
}

function listFiles(dirPath){
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if(err){
                reject(err)
            }else{
                resolve(files)
            }
        })
    })
}

function readFiles(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

function writeFiles(filePath, content){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err){
                reject(err)
            }else{
                resolve(`File '${filePath}' updated successfully`)
            }
        })
    })
}

function deleteFiles(filePath){
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if(err){
                reject(err)
            }else{
                resolve(`File '${filePath}' deleted successfully`)
            }
        })
    })
}

export default {
    createDirectory,
    createFile,
    listFiles,
    readFiles,
    writeFiles,
    deleteFiles
}