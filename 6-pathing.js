// 


const path = require('path');
console.log(path.sep);

const filepath = path.join('/content', 'stuff', 'wow.txt');
console.log(filepath);
const base = path.basename(filepath);
console.log(base);

const absoulte = path.resolve(__dirname, 'content', 'stuff', 'wow.txt');
console.log(absoulte);