/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window (global) binding - 'this' keyword deafults to the window object when you call a function 
and none of the other binding rules are present. 

* 2. Implicit binding - when invoking a function, the 'this' keyword is referring to whatever item is left of the dot 
as that function is being invoked.

* 3. New binding - 'this' keyword applies to the newly constructed item when the function is invoked with the new keyword.

* 4. Explicit binding - .call or .apply is used in explicit binding. The 'this' keyword is referring to whatever 
is being explicitly referenced in the function (can swap object references from new binding using .call or .apply to
refer to a different object's characteristics by calling that particular object)
*
* write out a code example of each explanation above
*/

// Principle 1

function favoriteColor(color) {
  console.log(this);
  return color;
}
favoriteColor("green");

// Principle 2

const favoriteColorFunc = obj => {
    obj.Color = function() {
      console.log(`My favorite color is ${this.color}`);
      console.log(this);
    };
  };
  const me = { color: 'Green' };
  const you = { color: 'Red' };
  favoriteColorFunc(me);
  favoriteColorFunc(you);

  me.Color();
  you.Color();

// Principle 3

function FavoriteAnimal(animal) {
    this.like = 'I like ';
    this.animal = animal;
    this.speak = function() {
      console.log(this.like + this.animal);
      console.log(this);
    };
  }
  
  const reese = new FavoriteAnimal('turtles');
  const cooper = new FavoriteAnimal('dogs');
  
  reese.speak();
  cooper.speak();

// Principle 4

function FavoriteAnimal(animal) {
    this.like = 'I like ';
    this.animal = animal;
    this.speak = function() {
      console.log(this.like + this.animal);
      console.log(this);
    };
  }
  
  const mom = new FavoriteAnimal('cats');
  const dad = new FavoriteAnimal('llamas');
  
  mom.speak.call(dad);
  dad.speak.call(mom);
