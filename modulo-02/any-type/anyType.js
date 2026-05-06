"use strict";
/**
 *
 * @module AnyType
 * @description
 * Demonstra conceitos de Any em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01: Tipo Any
const a = 777;
const b = 'Henrique';
const result = a + b;
console.log(result);
// ===> Exemplo 02: Quando tipo 'any' é interferido implicitamente
let frase;
frase = 'Oi, Pessoal! Tudo bem?';
console.log(frase);
// ===> Exemplo 03: Quando devemos usar o tipo any?!
const formulario = {
    nome: 'Henrqiue',
    sobrenome: 'Giacumuzzi',
    idade: 18,
};
console.log(formulario);
//# sourceMappingURL=anyType.js.map