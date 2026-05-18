/**
 *
 * @module objectType
 * @description
 * Demonstra conceitos de Object em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 18-05-2026
 *
 */

// ===> Exemplo 01 - Exemplo básico do uso do Type Object.

const pessoa = {
  nome: 'Henrique',
  sobrenome: 'Giacumuzzi',
  idade: 18,
  funcao: 'Desenvolvedor De Sistemas',
};

console.log(pessoa);

// ===> Exemplo 02 - Object com parâmetros de função (eles podem ser anônimos)

function onboarding01(funcionario: { nome: string }) {
  return 'Seja bem-vindo(a) ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Henrique Giacumuzzi' }));

// ===> Exemplo 03 - Object nomeados

interface Pessoa {
  nome: String;
  funcao: string;
}

function onboarding02(pessoa: Pessoa) {
  return (
    'Seja bem-vindo(a) ' +
    pessoa.nome +
    '! ' +
    'Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.'
  );
}

console.log(
  onboarding02({
    nome: 'Henrique Giacumuzzi',
    funcao: 'Desenvolvedor de sistemas',
  }),
);

// ===> Exemplo 04 - Object como type  alias

type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
};

function onboarding03(pessoa: Pessoa03) {
  return (
    'Seja bem-vindo(a) ' +
    pessoa.nome +
    '! ' +
    'Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    'Voce trabalhará com a linguagem ' +
    pessoa.linguagem
  );
}

console.log(
  onboarding03({
    nome: 'Henrique Giacumuzzi',
    funcao: 'Desenvolvedor de sistemas',
    linguagem: 'JavaScript/TypeScripts',
  }),
);

// ===> Exemplo 05 - Usando optional no object

interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string;
}

function onboarding04(pessoa: Pessoa04) {
  return (
    'Seja bem-vindo(a) ' +
    pessoa.nome +
    '! ' +
    'Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    'Voce trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(
  onboarding04({
    nome: 'Henrique Giacumuzzi',
    funcao: 'Desenvolvedor de sistemas',
    linguagem: 'JavaScript/TypeScripts',
  }),
);

// ===> Exemplo 06 - Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '//readonly)

interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}

function onboarding05(pessoa: Pessoa05) {
  return (
    'Seja bem-vindo(a) ' +
    pessoa.nome +
    '! ' +
    'Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    'Voce trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.' +
    ' Seu e-mail será ' +
    pessoa.email
  );
}

console.log(
  onboarding05({
    nome: 'Henrique Giacumuzzi',
    funcao: 'Desenvolvedor de sistemas',
    linguagem: 'JavaScript/TypeScripts',
    email: 'henriquegiacumuzzi@microsoft.com',
  }),
);

// ===> Exemplo 07 - Tipos de extensões (heranças)

interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Filho extends Mae, Pai {
  idade: number;
}

const filho: Filho = {
  nome: 'Henrique',
  sobrenome: 'Giacumuzzi',
  idade: 18,
};

console.log(filho);

// ===> Exemplo 08 - Tipos de Interseções

interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animal = Cachorro & Gato;

// ===> EXemplo 09 - Generic Objetcs

type Usuario = {
  nome: string;
  email: string;
};

type Admin = {
  nome: string;
  email: string;
  admin: true;
};

const usuario: Usuario = {
  nome: 'Henrque Giacumuzzi',
  email: 'usuario@gmail.com',
};

const admin: Admin = {
  nome: 'Henrque Giacumuzzi',
  email: 'usuario@gmail.com',
  admin: true,
};

function acessarSistema<T>(usuario: T): T {
  return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

/* function acessarSistema(usuario: Usuario): Usuario {
  return usuario;
}

console.log(acessarSistema(usuario)); */
