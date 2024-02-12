'use strict'

function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

const obj = {
  name: 'Dariya',
  age: 30,
  city: 'Odessa'
};

printOwnProperties(obj);