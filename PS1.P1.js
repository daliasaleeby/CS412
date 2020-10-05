
//function
const fun1 = str => str.split('').sort().reverse().join('');

//test
console.log(`supercalifragilisticexpialidocious: ${fun1("supercalifragilisticexpialidocious")}`);

module.exports = {fun1}