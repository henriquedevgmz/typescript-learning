/**
 *
 * @module StringType
 * @description
 * Demonstra conceitos de String em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */

// ===> Exemplo 01 - Single Quotes
let nomeCompleto: string = 'Henrique Giacumuzzi';
console.log(nomeCompleto);

// ===> Exemplo 02 - Double Quotes
let funcaoEmpresa: string = 'Desenvolvedor De Sistemas';
console.log(funcaoEmpresa);

// ===> Exemplo 03 - Back Ticks
let nomeEmpresa: string = 'Freelancer';

let dadosFuncionario: string = `Seja bem-vindo ${nomeCompleto}! Vocé será ${funcaoEmpresa} de forma ${nomeEmpresa}.`;
console.log(dadosFuncionario);
