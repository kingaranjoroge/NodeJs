
// INTRO

console.log('Hello World')
//console.log(global) 
const os = require('os')
const path = require('path')
const math2 = require('./math2')
const { add, subtract, multiply, divide } = require('./math2') 

console.log(math2.add(2, 3))
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename)) 

