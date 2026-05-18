"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01 - Exemplo básico do uso do Type Object.
const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Giacumuzzi',
    idade: 18,
    funcao: 'Desenvolvedor De Sistemas',
};
console.log(pessoa);
// ===> Exemplo 02 - Object com parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem-vindo(a) ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Henrique Giacumuzzi' }));
function onboarding02(pessoa) {
    return ('Seja bem-vindo(a) ' +
        pessoa.nome +
        '! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({
    nome: 'Henrique Giacumuzzi',
    funcao: 'Desenvolvedor de sistemas',
}));
function onboarding03(pessoa) {
    return ('Seja bem-vindo(a) ' +
        pessoa.nome +
        '! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        'Voce trabalhará com a linguagem ' +
        pessoa.linguagem);
}
console.log(onboarding03({
    nome: 'Henrique Giacumuzzi',
    funcao: 'Desenvolvedor de sistemas',
    linguagem: 'JavaScript/TypeScripts',
}));
function onboarding04(pessoa) {
    return ('Seja bem-vindo(a) ' +
        pessoa.nome +
        '! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        'Voce trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({
    nome: 'Henrique Giacumuzzi',
    funcao: 'Desenvolvedor de sistemas',
    linguagem: 'JavaScript/TypeScripts',
}));
function onboarding05(pessoa) {
    return ('Seja bem-vindo(a) ' +
        pessoa.nome +
        '! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        'Voce trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        ' Seu e-mail será ' +
        pessoa.email);
}
console.log(onboarding05({
    nome: 'Henrique Giacumuzzi',
    funcao: 'Desenvolvedor de sistemas',
    linguagem: 'JavaScript/TypeScripts',
    email: 'henriquegiacumuzzi@microsoft.com',
}));
const filho = {
    nome: 'Henrique',
    sobrenome: 'Giacumuzzi',
    idade: 18,
};
console.log(filho);
const usuario = {
    nome: 'Henrque Giacumuzzi',
    email: 'usuario@gmail.com',
};
const admin = {
    nome: 'Henrque Giacumuzzi',
    email: 'usuario@gmail.com',
    admin: true,
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
/* function acessarSistema(usuario: Usuario): Usuario {
  return usuario;
}

console.log(acessarSistema(usuario)); */
//# sourceMappingURL=objectType.js.map