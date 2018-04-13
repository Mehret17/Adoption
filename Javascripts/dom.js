const domEvents = require('./events');

const outputDiv = document.getElementById('pets');

const domString = (pets) => {
  let strang = '';
  pets.forEach((pets) => {
    strang += `<h2 class ="pet">${pets.name}</h2>`;
  });
  return strang;
};

const prinToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
  domEvents();
};

module.exports = prinToDom;
