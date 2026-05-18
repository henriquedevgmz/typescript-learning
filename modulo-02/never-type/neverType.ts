/**
 *
 * @module neverType
 * @description
 * Demonstra conceitos de never em TypeScript.
 *
 * @warning
 * Esse arquivo contém exemplos de `never` que não devem ser executados
 * diretamente em um ambiente de produção ou em um terminal não controlado.
 * Funções que lançam exceção e loops infinitos podem travar a máquina ou
 * interromper o fluxo de execução.
 *
 * @author Henrique Giacumuzzi
 * @date 18-05-2026
 *
 */

// ===> Exemplo 01: Never - Throw Exception

function error(message: string): never {
  throw new Error(message);
}

// Aviso: não execute diretamente. Esses exemplos lançam exceção.
// console.log(error('Erro de Mensagem 01'));

// ===> Exemplo 02: Never interferido automaticamente
function rejectMessage() {
  return error('Error de Mensagem - 02');
}

// console.log(rejectMessage());

// ===> Exemplo 03: Função que contém loop infinito retorna o tipo 'never'

// const loopInfinito = function loop() {
//   while (true) {
//     console.log('Oi, Developers!');
//   }
// };

// ===> Exemplo 04: Diferença entre os tipos: 'never' x 'void'

const variavelVoid: void = null;

// O tipo `never` não pode ser instanciado com um valor válido.
// const variavelNever: never = null;

console.log(variavelVoid);
// console.log(variavelNever);
