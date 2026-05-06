/**
 *
 * @module TypeBoolean
 * @description
 * Demmonstra conceitos de type boolean em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */

// ===> Exemplo 01
let tarefaConcluida: boolean = true;
let tarfeaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarfeaPendente);

// ===> Exemplo 02
let concluido: boolean = false;

if (!concluido) {
  console.log('Essa tarefa foi concluída com sucesso!');
} else [console.log('Tarefa pendente')];

// ===> Exemplo 03
let idade: number = 19;

if (idade >= 18) {
  console.log('Você poode dirigir.');
} else [console.log('Você tem menos de 18, não pode dirigir.')];
