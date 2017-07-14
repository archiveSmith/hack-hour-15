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

// Input
  // A function
  // An array of arguments
// Output
  // Invokes the inputted function, with the inputted args array as its arguments

function applyIt(func, args) {
  console.log(func.toString(), args);
  
  // Initialize base execution string
  let exe = 'func(';
  
  // Iterate through args
  args.forEach((arg, i) => {
  
    // if this is not the last arg, add a comma
    if (i !== 0) exe += ',';
  
    // JSON stringify the arg and add to the execution string
    exe += JSON.stringify(arg);
    
  });
  
  // Finish string
  exe += ');'
  
  // Evaluate the execution string
  eval(exe);
}

//applyIt(console.log, ['hi', 'hello']);

module.exports = applyIt;
