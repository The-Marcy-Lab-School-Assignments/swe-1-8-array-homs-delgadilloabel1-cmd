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
const roundAll = (arr) => {
  return arr.map(num => Math.round(num))
};

const onlyStrings = (arr) => {
  return arr.filter(str => typeof str === 'string')
};

const stringsToLength = (arr) => {
  return arr.map(str => str.length)
};

const totalGreaterThanGiven = (arr, num) => {
  const sum = arr.reduce((currentSum, currentNum) => {
    return currentNum + currentSum
  }, 0)
  return sum > num
};

const numberOfLongWords = (arr) => {
  const char = arr.filter(num => num.length > 4)
  if (char.length > 0) {
    return char.length
  } else {
    return 0
  }
};

const numberOfCharacters = (arr) => {
  arr.filter
};

const removeJerkFromCompany = (arr) => {
  const remove = arr.filter(persona => persona.personality === 'jerk')
  if (remove !== -1) {
    arr.splice(remove, 1)
  }
};

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
