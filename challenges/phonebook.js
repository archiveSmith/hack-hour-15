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
function findName(jazbook, name) {
  let match = false;

  jazbook.reduce((entry, search) => {
    if (search[0] === name) match = search[1];
  },'');

  return match;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
this.book = jazbook.reduce((entry, value) => {
    entry[value[0]] = value[1];
    return entry;
  }, {});
}

makePhoneBookObject.prototype.add = function(name, number) {
  if (this.book[name]) return false;
  this.book[name] = number;
}

makePhoneBookObject.prototype.lookUp = function(name) {
  if (this.book[name]) return this.book[name];
  return false;
}

makePhoneBookObject.prototype.remove = function(name) {
  if (!this.book[name]) return false;
  delete this.book[name];
  return true;
}

const jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
     ['jasmine','1800-974-4539'],
   ];

// const res = findName(jazbook, 'david');
// // console.log(res);
// const two = findName(jazbook, 'garrett');
// // console.log(two);
// const phonebook = new makePhoneBookObject(jazbook);
// console.log(phonebook);
// phonebook.add('garrett', '559-779-4235');
// console.log(phonebook.lookUp('garrett'));
// console.log(phonebook.remove('garrett'));
// console.log(phonebook);


const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
