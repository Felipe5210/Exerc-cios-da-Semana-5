import Fatura from './Fatura.js';

console.log('Exercício 2');
const melao = new Fatura(123, 'Melão', 2, 3);

const valor = melao.obterValorTotal();
const valorTotal = melao.valorTotal;

console.log(valor); // 6
console.log(valorTotal); // 6
