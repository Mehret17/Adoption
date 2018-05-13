const loadPets = require('./pets');
const dom = require('./dom');
const data = require('./data');
const addEvents = require('./events');

let allPets = [];
const whenPetsLoad = function () {
  allPets = JSON.parse(this.responseText).pets;
  data.setPets(allPets);
  dom(allPets);
  addEvents(data);
  console.log(allPets);
};

const badPets = function () {
  console.error('something is wrong');
};

// const getPets = () => {
//   return petArray;
// };

const initializer = () => {
  loadPets(whenPetsLoad, badPets);
};

module.exports = {
  initializer,
};
