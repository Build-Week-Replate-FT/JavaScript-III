/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. in a global scope this is refering to the window or console object  
* 2. implicit binding is refering to the object you are currently working on
* 3. when using a new constuctor binding the this keyword is refering to the object being created and returned
* 4. in explicit binding the this keyword is defined directly
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHi(greeting) {
    console.log(this);
    return greeting;
}
sayHi("Hello")

// Principle 2

// code example for Implicit Binding
const person = {
    name: "John",
    sayName: function(name) {
        console.log(`${this.name}`);
        console.log(this);
    }
}
person.sayName();
// Principle 3

// code example for New Binding
function MorningGreeting(person) {
    this.greeting = "Good Morning";
    this.greeter = person;
    this.tell = function() {
        console.log(`${this.greeting}  ${this.greeter}`);
        console.log(this);
    }
}
const maria = new MorningGreeting("Maria");
console.log(maria.tell());
// Principle 4

// code example for Explicit Binding
const kim = new MorningGreeting("Kim")
console.log(kim.tell.call(maria));
console.log(kim.tell());
