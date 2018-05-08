const data = require('./data');
const printToDom = require('./dom');

let petArray = [];

const selectedPet = (e) => {
  const petClicked = e.target.id;
  console.log(petClicked);
  const newArray = [];
  petArray = data.getPets();
  console.log (petArray);
  for (let i = 0; i < petArray.length; i++) {
    if (petClicked === petArray[i].type) {
      console.log(petArray[i].type);
      newArray.push(petArray[i]);
      console.log(newArray);
    };
  };
  printToDom(newArray);
};

const reset = () => {
  printToDom(petArray);
};

const addEvents = () => {
  const allButtons = document.getElementsByClassName('petButton');
  const resetButton = document.getElementById('reset');
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', selectedPet);
    resetButton.addEventListener('click', reset);
  };
};

module.exports = addEvents;
