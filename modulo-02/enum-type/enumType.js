"use strict";
/**
 *
 * @module EnumTypes
 * @description
 * Demmonstra conceitos de enum em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01: Numeric Enums (Enums numericos)
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingels"] = 2] = "Ingels";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// ===> Exemplo 02: String Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
// ===> Exemplo 03: Como podemos acessar o valor de um Enum com uma chave (usando const)
var Comida;
(function (Comida) {
    Comida["Strogonoff"] = "Strogonoff";
    Comida["Acai"] = "A\u00E7a\u00ED";
    Comida["Batata"] = "Batata";
    Comida["Churrasco"] = "Churrasco";
})(Comida || (Comida = {}));
function comida(c) {
    return 'Minhas comidas preferidas!';
}
console.log(comida(Comida.Strogonoff));
console.log(comida(Comida.Acai));
// ===> Exemplo 04: Qunado usar enum
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
};
if (concluidaTarefa.status == Tarefa.Progress) {
    console.log('Tarefa em andamento...');
}
else if (concluidaTarefa.status == Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!');
}
else if (concluidaTarefa.status == Tarefa.Todo) {
    console.log('Tarefa ainda não iniciada.');
}
else {
    console.log('Status desconhecido.');
}
//# sourceMappingURL=enumType.js.map