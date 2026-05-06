/**
 *
 * @module TupleType
 * @description
 * Demonstra conceitos de Tuple em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */

// ===> Exemplo 01 - Uso Simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Henrique Giacumuzzi', 'Desenvolvedor De Sistemas', 18];
console.log(pessoa);

// ===> Exemplo 02 - Acessando valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Henrique Giacumuzzi', 'Desenvolvedor De Sistemas', 18];
console.log(pessoa1[1]);

// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScrip (com labels)

let pessoa2: [nome: string, posicao: string, idade: number] = [
  'Henrique Giacumuzzi',
  'Desenvolvedor De Sistemas',
  18,
];
console.log(pessoa2);

// ===> Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);

// ===> Exemplo 05 - Lista Heterogênea de Tupla

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// ===> Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades];
}
let resultado = listarPessoas(['Henrique Giacumuzzi', 'Fulana'], [18, 42]);
console.log(resultado);

// ===> Exemplo 07 - Labeled Tuples com Spread Operator numa função
type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}

console.log(criarPessoa('Henrique', 'Giacumuzzi'));
console.log(criarPessoa('Henrique', 'Da Silveira', 'Giacumuzzi'));
