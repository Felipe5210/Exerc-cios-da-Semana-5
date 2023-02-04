import Juros from './src/Juros.js';

console.log('Exercício 6');
const aplicacao1 = new Juros(10000, 0.07, 24);
const aplicacao2 = new Juros(10000, 0.15, 10);

console.log(aplicacao1.calcularJurosSimples());
console.log(aplicacao2.calcularJurosCompostos());
