/**
 *
 * @module numberBigint
 * @description
 * Demmonstra conceitos de number e bigint em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */

// ====> SEPARAÇÂO DE NUMEROS PARA MELHOR VISIBILIDADE DE NUMBER E BIGINT.
let linha: string = '===============================================';

// ===> Exemplos: number
let num1: number = 23.0;
let num2: number = 0x78cf;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number - Ponto Flutuante...:', num1);
console.log('Number - Hexadecimal...:', num2);
console.log('Number - Octal...:', num3);
console.log('Number - Binario...:', num4);

// SEPARAÇÃO DE LINHA
console.log(linha);

// ===> Exemplos: bigint
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log('Bigint ...:', big1);
console.log('Bigint - Binário...:', big2);
console.log('Bigint - Hexadecimal...:', big3);
console.log('Bigint - Octal...:', big4);
