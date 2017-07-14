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

// Given a function, and an array of arguments, use the applyIt function
// to pass the array of arguments into the function

// Goal: create the apply / spread operator
// Iterate through the array, pass each argument to the function
    // JSON Stringify?

function applyIt(func, args) {
  console.log(func.toString());
  
  const funcString = func.toString();
  const firstPosition = funcString.indexOf(' ');
  const secondPosition = funcString.indexOf('(');
  let funcName = funcString.slice(firstPosition + 1, secondPosition);
    let argumentString = funcName += '(';
    for (let i = 0; i < args.length; i++) {
      if (i === 0) argumentString += args[i];
      else argumentString = argumentString + ', ' + args[i];
    }
    argumentString += ')';
    return eval ( argumentString );
}

module.exports = applyIt;
