/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The keyword This on a global scope refers to the window or console object  
* 2. The keyword This in implicit binding refers to the object to left of the kewword This.
* 3. The keyword This when used with the keyword New in a constuctor binding refers to the object being created and returned
* 4. The keyword this in explicit binding refers to the parameter being added.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const person = {
    name: "John",
    sayName: function() {
        console.log(`${this.name}`);
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
        
    }
}
const goodMorningMaria = new MorningGreeting("Maria");
goodMorningMaria.tell()
console.log(goodMorningMaria)

// Principle 4

// code example for Explicit Binding
function chores(person) {
    console.log(`It's ${this.name}'s turn to do the ${this.chore}`)
}

const kid1 = {
    name: "Tim",
    chore: "dishes"
}

const kid2 = {
    name: "Mary",
    chore: "mopping"
}
chores.call(kid1);
chores.call(kid2)