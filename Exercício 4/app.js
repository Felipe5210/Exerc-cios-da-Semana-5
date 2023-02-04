import { Cachorro, Gato } from './src/animal.js';

console.log('Exercício 4');

const snoopy = new Cachorro('snoopy', 10);

console.log(snoopy.som); // "latido"

const frajola = new Gato('frajola', 8);

console.log(frajola.som); // "miado"
