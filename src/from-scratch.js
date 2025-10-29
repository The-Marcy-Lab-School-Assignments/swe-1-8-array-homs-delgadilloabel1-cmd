// find
const getUserById = (arr, id) => {
  return arr.find(obj => obj.id === id)
};

// findIndex
const getIndexOfApple = (arr) => {
  return arr.findIndex(obj => obj.name === 'apple')
};

// reduce
const getSquaredTotal = (arr) => {
  return arr.reduce((currentSum, currentNum) => {
    return currentNum ** 2 + currentSum;
  }, 0)

};

// every
const hasOnlyEvenNumbers = (arr) => {
  return arr.length > 0 && arr.every(num => num % 2 === 0)
};

// some
const anyGreaterThan10 = (arr) => {
  return arr.some(num => num > 10)
};

// Use your judgement to decide which array method to use!
const roundAll = () => { };

const onlyStrings = () => { };

const stringsToLength = () => { };

const totalGreaterThanGiven = () => { };

const numberOfLongWords = () => { };

const numberOfCharacters = () => { };

const removeJerkFromCompany = () => { };

const chosenCoordinates = () => { };

// Sorting Functions
const sortWords = () => { };

const sortNumbers = () => { };

const sortNumbersBetter = () => { };

const sortUsersByOrder = () => { };

const sortUsersByName = () => { };

module.exports = {
  getUserById,
  getSquaredTotal,
  hasOnlyEvenNumbers,
  getIndexOfApple,
  numberOfCharacters,
  anyGreaterThan10,
  roundAll,
  removeJerkFromCompany,
  onlyStrings,
  chosenCoordinates,
  stringsToLength,
  totalGreaterThanGiven,
  numberOfLongWords,
  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
