/**
 *
 * @module TypeAnnotations
 * @description
 * Demonstra conceitos de type annotation em TypeScript.
 *
 * @author Henrique Giacumuzzi
 * @date 06-05-2026
 *
 */

// ===> Variáveis [Type Annotations]
let nome: string = 'Henrique Giacumuzzi';
console.log(nome);

// ===> Arrays [Type Annotations]
let capacidades: string[] = ['Design', 'Flutter', 'Frontend'];
console.log(capacidades);

// ===> Objetos [Type Annotations]
let carro: {
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
};

carro = { marca: 'Honda', modelo: 'Civic TypeR', ano: 2024, preco: 370000 };
console.log(carro);

// ===> Functions [Type Annotiaons]
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}
console.log(multiplicarNumero(2, 5));
