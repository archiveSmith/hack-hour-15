/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook

// Time complexity: O(n)
// Create a object in memory that contains previous lookups
// Retrieve the number from memory if it exists
// Go through the array if it does not exist

function findName(jazbook, name) {
  let memory = {};
  if (memory[name]) return memory[name];
  else {
    for (let i = 0; i < jazbook.length; i++) {
      if (jazbook[i][0] === name) {
        memory[name] = jazbook[i][1];
        return jazbook[i][1];
      }
    }
  }
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  for (let i = 0; i < jazbook.length; i++) {
    this[jazbook[i][0]] = jazbook[i][1];
  }
}

makePhoneBookObject.prototype.add = function(name, number) {
  if (this[name]) return 'already exists';
  this[name] = number;
  return `added ${name}`;
}

makePhoneBookObject.prototype.lookup = function(name) {
  if (this[name]) return this[name];
  return undefined;
}

makePhoneBookObject.prototype.remove = function(name) {
  if (!this[name]) return undefined;
  delete this[name];
  return `deleted ${name}`;
}

const jazbook = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
  ];

  // console.log('findAlex', findName(jazbook, 'alex'));
  // let myPhoneBook = new makePhoneBookObject(jazbook);
  // console.log(myPhoneBook.add('Penn', '412-689-8646'));
  // console.log(myPhoneBook.lookup('Penn'));
  // console.log(myPhoneBook);
  // console.log(myPhoneBook.remove('Penn'));
  
const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
