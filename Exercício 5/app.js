import CalculadoraDeArea from './src/CalculadoraDeArea.js';
console.log('Exercício 5');

const quadA = new CalculadoraDeArea('quadrado', 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea('triangulo', 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28
