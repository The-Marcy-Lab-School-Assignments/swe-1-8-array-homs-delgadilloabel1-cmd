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

const numberOfCharacters = (str) => {
  const arr = str.split("")
  return freq = arr.reduce((freq, currentChar) => {
    if (!freq[currentChar]) {
      freq[currentChar] = 1;
    } else {
      freq[currentChar]++
    }
    return freq
  }, {})
};

const removeJerkFromCompany = (arr) => {
  const remove = arr.findIndex(persona => persona.personality === 'jerk')
  if (remove !== -1) {
    arr.splice(remove, 1)
  }
};

const chosenCoordinates = (arr, num) => {
  return arr.find(pair => pair[0] + pair[1] === num)
};

// Sorting Functions
const sortWords = (arr) => {
  return [...arr].sort()
};

const sortNumbers = (arr) => {
  return [...arr].sort((a, b) => a - b)
};

const sortNumbersBetter = (arr, boolean) => {
  if (boolean === true) {
    return [...arr].sort((a, b) => b - a)
  } else {
    return [...arr].sort((a, b) => a - b)
  }

};

const sortUsersByOrder = (arr) => {
  return [...arr].sort((a, b) => a.order - b.order)
};

const sortUsersByName = (arr) => {
  return [...arr].sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA.localeCompare(nameB)
  })
};

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
