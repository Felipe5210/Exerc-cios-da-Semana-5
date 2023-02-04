import Time from './src/Time.js';
import Partida from './src/Partida.js';
console.log('Exercício 7');
const times = [
  new Time('Flamengo', 'FLA'),
  new Time('Vasco', 'VAS'),
  new Time('Fluminense', 'FLU'),
  new Time('Botafogo', 'BOT'),
];

const partidas = [
  new Partida('FLA', 2, 'VAS', 1),
  new Partida('FLU', 1, 'BOT', 0),
  new Partida('FLA', 3, 'FLU', 1),
  new Partida('VAS', 1, 'BOT', 1),
];

times.forEach((time) => {
  partidas.forEach((partida) => {
    time.computarPartida(partida);
  });
  time.exibirSituacao();
});
