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

function applyIt(fn, args) {    
    switch (args ? args.length : 0) {
        case 0:
            return context ? fn.call(this) : fn();
        case 1:
            return context ? fn.call(this, args[0]) : fn(args[0]);
        case 2:
            return context ? fn.call(this, args[0], args[1]) : fn(args[0], args[1]);
        case 3:
            return context ? fn.call(this, args[0], args[1], args[2]) : fn(args[0], args[1], args[2]);
        case 4:
            return context ? fn.call(this, args[0], args[1], args[2], args[3]) : fn(args[0], args[1], args[2], args[3]);
        case 5:
            return context ? fn.call(this, args[0], args[1], args[2], args[3], args[4]) : fn(args[0], args[1], args[2], args[3], args[4]);
    }  
}

module.exports = applyIt;
