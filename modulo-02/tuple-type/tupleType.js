"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01 - Uso Simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Henrique Giacumuzzi', 'Desenvolvedor De Sistemas', 18];
console.log(pessoa);
// ===> Exemplo 02 - Acessando valor da Tupla
let pessoa1;
pessoa1 = ['Henrique Giacumuzzi', 'Desenvolvedor De Sistemas', 18];
console.log(pessoa1[1]);
// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScrip (com labels)
let pessoa2 = [
    'Henrique Giacumuzzi',
    'Desenvolvedor De Sistemas',
    18,
];
console.log(pessoa2);
// ===> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
// ===> Exemplo 05 - Lista Heterogênea de Tupla
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// ===> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Henrique Giacumuzzi', 'Fulana'], [18, 42]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Henrique', 'Giacumuzzi'));
console.log(criarPessoa('Henrique', 'Da Silveira', 'Giacumuzzi'));
//# sourceMappingURL=tupleType.js.map