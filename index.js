const utilities = require("./utilities")

function getNames(breeds) {
  return breeds.map(breed => breed.name)
}

function getBreed(breed) {
  return function(names) {
    return names.find(name => name === breed) || "Not Found"
  }
}

function getDog(breed) {
  return utilities
    .getDogBreeds()
    .then(getNames)
    .then(getBreed(breed))
}

function getCat(breed) {
  return utilities
    .getCatBreeds()
    .then(getNames)
    .then(getBreed(breed))
}

function getHamsters(breed) {
  return utilities
    .getHamsters()
    .then(getNames)
    .then(getBreed(breed))
}

getDog("Corgi")
  .then(dog => {
    return getCat("Russian Blue").then(cat => {
      return utilities.getBestPet(dog, cat)
    })
  })
  .then(console.log)
