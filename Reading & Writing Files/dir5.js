
// ...cont READING AND WRITING FILES

const fs = require('fs')

if(!fs.existsSync('./new')){
fs.mkdir('./new', (err) => {
    if (err) throw err
    console.log('Directory created')
})}

if(!fs.existsSync('./files/read.txt')){
fs.writeFile('./files/read.txt', 'utf8', (err) => {
    if (err) throw err
    console.log('File created');
})}


if(fs.existsSync('./new')){
fs.rmdir('./new', (err) => {
    if (err) throw err
    console.log('Directory removed')
})}

