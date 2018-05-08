const outputDiv = document.getElementById('pets');

let strang = '';
const domString = (pets) => {
  pets.forEach((pets) => {
    strang += `<div class = "col-md-4 petCard ${pets.type}s">`;
    strang +=   `<div class="panel panel-default">`;
    strang +=   `<h2 class ="panel-heading-with-title pets">${pets.name}</h2>`;
    strang +=   `<img class ="petImage" src ="${pets.imageUrl}"alt="">`;
    strang +=   `<p>${pets.color}</p>`;
    strang +=   `<p>${pets.specialSkill}</p>`;
    strang +=   `<p id = ${pets.type}>${pets.type}</p>`;
    strang +=   `</div>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
};

module.exports = printToDom;
