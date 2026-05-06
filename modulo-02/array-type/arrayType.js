"use strict";
/**
 *
 * @module ArrayType
 * @description
 * Demmonstra conceitos de array em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01 - Uso de Colchetes:
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[0]);
// ===> Exemplo 02 - Array Object (Objeto Array):
let frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[1]);
// ===> Exemplo 03 - Adicionando mais strings com método 'push'
let carros = ['Honda', 'Ford', 'Fiat', 'Toyota'];
console.log(carros);
carros.push('Hyundai');
console.log(carros);
carros.push('Chevrolet');
console.log(carros);
// ===> Exemplo 04 - Identificar tamanho do array - método 'lenght'
let carros1 = ['Honda', 'Ford', 'Fiat', 'Toyota'];
console.log(carros1.length);
// ===> Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// ===> Exemplo 06 - Exemplo de Array com laço de iteração
let linguagensArray = new Array('JavaScript', 'Flutter', 'Python', 'C#');
function funcaoLingaguens(lingaguens) {
    for (let i = 0; i < lingaguens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLingaguens(linguagensArray);
//# sourceMappingURL=arrayType.js.map