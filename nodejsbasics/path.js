const path = require('path')

console.log(path.sep)

const filepath = path.resolve(__dirname, 'models')
console.log(filepath)

const file = path.join('/models', 'crud.js')
console.log(file);
