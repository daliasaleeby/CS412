const evaluate= ([a,o,b]) => {

    switch(o)  {
        case '+':
            return (a,b) => a+b;
            break;
        case '-':
            return (a,b) => a-b;
            break;
        case '*':
            return (a,b) => a*b;
            break;
        case '/':
            return (a,b) => a/b;
            break;
        case '^':
            return (a,b) => a^b;
            break;
    }
}





console.log(`4+2 = ${evaluate('4+2')(4,2)}`)

console.log(`5*7 = ${evaluate('5*7')(5,7)}`)

console.log(`6-1 = ${evaluate('6-1')(6,1)}`)

console.log(`9/2 = ${evaluate('9/2')(9,2)}`)

console.log(`2^8 = ${evaluate('2^8')(2,8)}`)

module.exports = {evaluate}