const data = require('./data');
const dom = require('./dom');

const catButton = document.getElementById('catbtn');
const dogButton = document.getElementById('dogbtn');
const dinoButton = document.getElementById('dinobtn');
const resetButton = document.getElementById('resetbtn');

const catCard = document.getElementsByClassName('cat');
const dogCard = document.getElementsByClassName('dog');
const dinoCard = document.getElementsByClassName('dino');

const showCat = () => {
  for (let i = 0; i < dogCard.length; i++) {
    dogCard[i].classList.add('hidden');
  };
  for (let j = 0; j < dinoCard.length; j++) {
    dinoCard[j].classList.add('hidden');
  };
  for (let m = 0; m < catCard.length; m++) {
    catCard[m].classList.remove('hidden');
  };
};

const showDog = () => {
  for (let j = 0; j < dinoCard.length; j++) {
    dinoCard[j].classList.add('hidden');
  };
  for (let m = 0; m < catCard.length; m++) {
    catCard[m].classList.add('hidden');
  };
  for (let i = 0; i < dogCard.length; i++) {
    dogCard[i].classList.remove('hidden');
  };
};

const showDino = () => {
  for (let m = 0; m < catCard.length; m++) {
    catCard[m].classList.add('hidden');
  };
  for (let i = 0; i < dogCard.length; i++) {
    dogCard[i].classList.add('hidden');
  };
  for (let j = 0; j < dinoCard.length; j++) {
    dinoCard[j].classList.remove('hidden');
  };
};

const reset = () => {
  const allPets = data.getPets();
  dom(allPets);
};

const addEvents = (e) => {
  catButton.addEventListener('click', showCat);
  dogButton.addEventListener('click', showDog);
  dinoButton.addEventListener('click', showDino);
  resetButton.addEventListener('click', reset);
};

module.exports = addEvents;
