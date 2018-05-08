let pets = [];

const getPets = () => {
  return pets;
};

const setPets = (petsArray) => {
  pets = petsArray;
};

module.exports = {
  getPets,
  setPets,
};
