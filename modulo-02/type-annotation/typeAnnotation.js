"use strict";
/**
 *
 * @module TypeAnnotations
 * @description
 * Demmonstra conceitos de type annotation em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Variáveis [Type Annotations]
let nome = 'Henrique Giacumuzzi';
console.log(nome);
// ===> Arrays [Type Annotations]
let capacidades = ['Design', 'Flutter', 'Frontend'];
console.log(capacidades);
// ===> Objetos [Type Annotations]
let carro;
carro = { marca: 'Honda', modelo: 'Civic TypeR', ano: 2024, preco: 370000 };
console.log(carro);
// ===> Functions [Type Annotiaons]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 5));
//# sourceMappingURL=typeAnnotation.js.map