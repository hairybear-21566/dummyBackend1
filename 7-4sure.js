// const fs =require('fs');
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/stuff1.txt', 'utf8');
const second = readFileSync('./content/stuff2.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt',
    `here is is the results: \n${first, second}`, { flag: 'a' });