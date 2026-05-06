/**
 *
 * @module EnumTypes
 * @description
 * Demonstra conceitos de enum em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */

// ===> Exemplo 01: Numeric Enums (Enums numericos)

enum Idioma {
  Portugues,
  Espanhol,
  Ingels,
  Frances,
}

console.log(Idioma);

// ===> Exemplo 02: String Enums

enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}
console.log(Dia);

// ===> Exemplo 03: Como podemos acessar o valor de um Enum com uma chave (usando const)

const enum Comida {
  Strogonoff = 'Strogonoff',
  Acai = 'Açaí',
  Batata = 'Batata',
  Churrasco = 'Churrasco',
}

function comida(c: Comida) {
  return 'Minhas comidas preferidas!';
}

console.log(comida(Comida.Strogonoff));
console.log(comida(Comida.Acai));

// ===> Exemplo 04: Qunado usar enum

enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (concluidaTarefa.status == Tarefa.Progress) {
  console.log('Tarefa em andamento...');
} else if (concluidaTarefa.status == Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa Concluída!');
} else if (concluidaTarefa.status == Tarefa.Todo) {
  console.log('Tarefa ainda não iniciada.');
} else {
  console.log('Status desconhecido.');
}
