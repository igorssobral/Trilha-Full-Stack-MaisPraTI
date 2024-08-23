const prompt = require('prompt-sync')();

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const A = Number(prompt('Digite o lado A: '));
const B = Number(prompt('Digite o lado B: '));
const C = Number(prompt('Digite o lado C: '));

let result = '';

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    result = 'Triângulo Equilátero';
  } else if (A === B || A === C || B === C) {
    result = 'Triângulo Isósceles';
  } else {
    result = 'Triângulo Escaleno';
  }
} else {
  result = 'Não é um triângulo';
}

console.log(result);
