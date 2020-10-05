const fun3 = (str, dec) => dec(str);

let expr1 = fun3('supercalifragilisticexpialidocious', str => str.split(/(?=c)/g));



let expr2 = fun3('supercalifragilisticexpialidocious', str => {
        return {
            originalString: str,
            modifiedString: str.split('a').join('A'),
            numberReplaced: (str.match(/a/g, "A") || []).length,
            length: str.length
        }
    }
);

console.log(`expr1: ${expr1}`)
console.table(expr2)
module.exports= {fun3}