"use strict";
/**
 *
 * @module voidType
 * @description
 * Demonstra conceitos de Void em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 18-05-2026
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01 - Funções
function logError(errorMessage) {
    console.log(errorMessage);
    // return errorMessage;
}
logError('Required field - Name!');
// ===> Exemplo 02 - Funções
const logErrorExample2 = (errorMassage) => {
    console.log(errorMassage);
};
logErrorExample2('Required field - Surname');
// ===> Exemplo 03 - Uso em variáveis
let variavelExemploVoid;
// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);
//# sourceMappingURL=voidType.js.map