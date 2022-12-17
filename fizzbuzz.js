let resultado = 4;
console.log(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(valor) {
  if (valor % 3 == 0 && valor % 5 == 0) {
    return "FizzBuzz";
  } else if (valor % 3 == 0) {
    return "Fizz";
  } else if (valor % 5 == 0) {
    return "Buzz";
  }
 
  return valor;
}