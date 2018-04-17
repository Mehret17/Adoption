const data = require('./dataGateKeeper');

console.log(data.getPets());

// wrap it with eventlistner function
const selectedPet = (e) => {
  const petName = e.target.innerHTML.toLowerCase();
  const allPets = document.getElementsByClassName('petCard');
  for (let m = 0; m < allPets.length; m++) {
    allPets[m].classList.add('hidden');
  };
  const chosenPet = document.getElementsByClassName(`${petName}`);
  for (let j = 0; j < chosenPet.length; j++) {
    chosenPet[j].classList.remove('hidden');
    console.log(chosenPet[j]);
  };

  console.log(chosenPet);
  console.log(petName);
  // petName.style.display = 'inline';
  // selectedPet.classList
};

module.exports.addEvents = () => {
  const allButtons = document.getElementsByClassName('button');
  const petsCard = document.getElementsByClassName('pet');
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', selectedPet);
    console.log(allButtons[i]);
    if (allButtons[i] === 'cat') {
      console.log(allButtons);
      petsCard[i].type.cats.style.display = 'block';
    } else if (allButtons[i] === 'dog') {
      petsCard[i].type.dog.display = 'block';
    } else if (allButtons[i] === 'dino') {
      petsCard[i].type.dino.display = 'block';
    } else selectedPet;
  }
};
