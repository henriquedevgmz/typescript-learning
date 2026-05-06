"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01
let tarefaConcluida = true;
let tarfeaPendente = false;
console.log(tarefaConcluida);
console.log(tarfeaPendente);
// ===> Exemplo 02
let concluido = false;
if (!concluido) {
    console.log("Essa tarefa foi concluída com sucesso!");
}
else
    [console.log("Tarefa pendente")];
// ===> Exemplo 03
let idade = 19;
if (idade >= 18) {
    console.log("Você poode dirigir.");
}
else
    [console.log("Você tem menos de 18, não pode dirigir.")];
//# sourceMappingURL=booleanType.js.map