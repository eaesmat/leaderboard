import addScore from './module/addScore.js';
import getData from './module/getData.js';

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  addScore(document.querySelector('#name').value, Number(document.querySelector('#score').value));
});

document.querySelector('#refresh').addEventListener('click', (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-restricted-globals
  getData();
});
// eslint-disable-next-line no-restricted-globals
// location.reload();
