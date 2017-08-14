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


   jazbookOne = [     
     ['alex','301-844-3421'],     
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
     ['jasmine','1800-974-4539'],
   ];

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  // jazbook.forEach((nameNum)=>{
  //   if (name === nameNum[0]) return nameNum[1]
  // })
  // return false;
for (let i=0; i<jazbook.length; i++){
  if (name === jazbook[i][0]){
    return jazbook[i][1];
  }
}
return false;
}

function pbObj(){
  this.bookObj={};
}

// return an object literal representing the jazbook
pbObj.prototype.makePhoneBookObject =(jazbook)=>{
  this.jbObj = {};
  for (let i=0; i<jazbook.length; i++){
    // console.log(jazbook[i][0]);
    jbObj[jazbook[i][0]] = jazbook[i][1];
  }
  return jbObj;
}

// makePhoneBookObject.prototype.findName = (thisName) => {
//   console.log(this);
//   for (name in this.jbObj){
//     if (name === thisName) return this.name;
//   }
//   return false;
// }

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

console.log(findName(jazbookOne, "alex"));
console.log(makePhoneBookObject(jazbookOne));

myBook = new pbObj();
myBook.makePhoneBookObject(jazbookOne);
console.log("////////")
console.log(myBook);
// console.log(myBook.findName('alex'));