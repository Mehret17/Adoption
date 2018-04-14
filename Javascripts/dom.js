const domEvents = require('./events');

const outputDiv = document.getElementById('pets');
let strang = '';
const domString = (pets) => {
  pets.forEach((pets) => {
    strang += `<div class = "col-md-4 petCard">`;
    strang +=   `<div class="panel panel-default">`;
    // strang +=   `<div class="panel-heading">`;
    strang +=   `<h2 class ="panel-heading-with-title pets">${pets.name}</h2>`;
    strang +=   `<img class ="petImage" src ="${pets.imageUrl}"alt="">`;
    strang +=   `<p>${pets.color}</p>`;
    strang +=   `<p>${pets.specialSkill}</p>`;
    strang +=   `<p>${pets.type}</p>`;
    strang +=   `</div>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });
  return strang;
};

const prinToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
  domEvents();
};

module.exports = prinToDom;
