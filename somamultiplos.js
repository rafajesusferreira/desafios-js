var a = 3;
var N = 18;
var soma = 0;

for (var i = a; i <= N; i++) {
  if (i % a == 0) {
    soma = soma + i;
  }
}

console.log(soma);