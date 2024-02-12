'use strict'


class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}
 
const sparky = new Dog("Sparky", 3, "Terrier");
console.log(sparky);

function showEntries(object) {
  Object.entries(object);
  console.log(Object.entries(object));
}

showEntries(sparky);

function hasProperty(key, object) {
  return object.hasOwnProperty(key);
}

console.log(hasProperty("color", sparky));