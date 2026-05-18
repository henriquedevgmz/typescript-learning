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

// ===> Exemplo 01 - Funções

function logError(errorMessage: string): void {
  console.log(errorMessage);
  // return errorMessage;
}

logError('Required field - Name!');

// ===> Exemplo 02 - Funções

const logErrorExample2 = (errorMassage: string): void => {
  console.log(errorMassage);
};

logErrorExample2('Required field - Surname');

// ===> Exemplo 03 - Uso em variáveis

let variavelExemploVoid: void;
// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);
