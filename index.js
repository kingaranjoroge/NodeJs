
// READING AND WRITING FILES

const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

// READING TO FILE

/* fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
}) */

// Can also work as follows

/* fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})  */

/* // Using path module

fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}) */ 

/* // WRITING TO FILE

fs.writeFile(path.join(__dirname,'files','reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log('Write complete');

        // Appending File(updating/modifying)
    fs.appendFile(path.join(__dirname,'files','reply.txt'), ' Looking forward to getting to know you better.', (err) => {
        if (err) throw err;
        console.log('Append complete');
        
            // Renaming file
        fs.rename(path.join(__dirname,'files','reply.txt'), path.join(__dirname,'files','newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename complete');
        })
    })
}) */

// Using FETCH to read and write to files to prevent callback hell(using PROMISES)

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'), 'utf8')
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'),data)
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data)
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\nNice to meet you.')
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'), path.join(__dirname,'files','promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'), 'utf8')
        console.log(newData);
    }catch(err){
        console.error(err);
    }
}
fileOps();



