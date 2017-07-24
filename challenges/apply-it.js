/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */
// input: a function which takes arguments and array of arguments
// convert args array into comma separated values
// output: input function with arguments in array passed in

function applyIt(func, args) {
  return func(args[0], args[1], args[2])  
}

let person = function(name, age, loc) {
  return name + ' ' + age + ' ' + loc;
}

console.log(applyIt(person, ['jerry', '39', 'ca'])z

module.exports = applyIt;
