import Personagem from './personagem.js';

console.log('Exercício 3');

const alyx = new Personagem('Alyx');

console.log(alyx.percentualVida); // 100

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60
