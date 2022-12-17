let entrada = 'digital';
console.log(checaPalindromo(entrada));

function checaPalindromo(str) {
    return str.split('').reverse().join('') == str;
}

// 2a forma de resolver, fazendo diretamente um for loop
// function checaPalindromo(str) {
//     let reverse = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     return reverse == str
// }