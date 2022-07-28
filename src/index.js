import addScore from './module/addScore.js';
import getData from './module/getData.js';

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  addScore(document.querySelector('#name').value, Number(document.querySelector('#score').value));
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  getData();
});
