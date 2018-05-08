const loadPets = require('./pets');
const printToDom = require('./dom');
const data = require('./data');

let petArray = [];
const whenPetsLoad = function () {
  petArray = JSON.parse(this.responseText).pets;
  data.setPets(petArray);
  printToDom(petArray);
  console.log(petArray);
};

const badPets = function () {
  console.error('something is wrong');
};

const getPets = () => {
  return petArray;
};

const initializer = () => {
  loadPets(whenPetsLoad, badPets);
};

module.exports = {
  initializer,
  getPets,
};
