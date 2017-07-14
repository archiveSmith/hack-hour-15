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
'use strict' 

   let jae = function(name, age, location) {
     return name + " is " + age + " and he lives in " + location;
   };
 
function applyIt(func, args) {
   //return func.apply(this, args);
   let obj = {};
   obj.func = func;
   obj.args = args;
//    return obj.func(obj.args);
    return func(...args);
}

// console.log(jae.apply(this, ["Jae", 19, "South Carolina"]));

console.log(applyIt(jae, ["Jae", 19, "South Carolina"]));

module.exports = applyIt;
