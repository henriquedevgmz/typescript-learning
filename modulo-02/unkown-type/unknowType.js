"use strict";
/**
 *
 * @module unkowType
 * @description
 * Demonstra conceitos de Unknown em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 18-05-2026
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01 - Tipo Unknown
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';
// console.log(valorVariavel);
// ===> Exemplo 02 - Erro ao tetnar atribuir um valor do tipo 'unkown' a outros tipos.
/* let valor: unknown;

let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor; */
// ===> Exemplo 02 - Diferença entre: 'any' vs 'unknown'.
let variavelAny;
let variavelUnknown;
console.log(variavelAny.toFixed());
if (typeof variavelUnknown == 'number') {
    console.log(variavelUnknown.toFixed());
}
//# sourceMappingURL=unknowType.js.map