//console.log(__dirname);
//console.log(__filename);

const names = require('./2-names.js');
const funky = require('./3-utils.js')
const data = require('./4-other-flavors.js')

console.log(data);

funky.sayHi(names.firstName);
funky.sayHi(names.lastName);