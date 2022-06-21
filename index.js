/*
A ternary operator takes three operands: 
1 - a condition followed by a question mark (?), 2- then an expression to execute if the condition is truthy followed by a colon (:), 
3- and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

** Ternary operator must always return a value
// response will evaluate to $2.00 or $10.00
 let response = isMember ? '$2.00' : '$10.00'

TERNARY SYNTAX
condition (no if) ? truthy : falsy
*/

/**
 * seeMovie()
 * ------------
 * Takes an age parameter and returns whether a person is old enough to see the movie.
 * If the person is over 12, return a string
 * saying: 'Enjoy the movie!'.
 * If not, return a string saying:
 * 'Come back when you are older.'
 * @param {number} age
 * @returns {string}
 */

// if(age > 12){}

function seeMovie(age) {
  let answer = age > 12 ? "Enjoy the movie!" : "Come back when you are older.";

  return answer;
}

// console.log(seeMovie(15));

/**
 * loggedIn()
 * -----------------
 * Takes in a boolean that represents whether the
 * user is logged in. If the user is logged in,
 * returns 'Welcome to my website'. If not,
 * returns, 'Please sign up or log in'
 *
 * @param {boolean} isLogged
 * @returns {string}
 */

function myLogger(isLogged) {
  return isLogged ? "Welcome to my website" : "Please sign up or log in";
}
// console.log(myLogger(true, 14));

//if we have multiple condtions we place them before the question mark
function myLogger2(isLogged, age) {
  return isLogged && age > 12
    ? "Welcome to my website"
    : "Please sign up or log in";
}

// console.log(myLogger2(true, 15));

function myLogger3(isLogged, age) {
  if (isLogged) {
    return age > 12 ? "Welcome to my website" : "Please sign up or log in";
  }
}

// console.log(myLogger3(true, 11));

//switch/case
// evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case

/**
 *
 * costOfFruit()
 * ---------------
 * Takes in the name of a fruit. If the fruit is in stock, it will return the cost of that fruit. If the fruit is 'apple', it will return a string says, 'Apples are $2.79 a pound'. If the fruit is orange it will return a string that says:
 * 'Oranges are $3.00 a pound'. If it says bananas it will return 'Bananas are 75 cents a pound'. Otherwise, it will return, 'Sorry, we are all out of <name of fruit>'
 * @param {string} fruit
 * @returns {string}
 */

function costOfFruit(fruit) {
  let answer = "";
  switch (fruit) {
    case "apple":
      answer = "Apples are $2.79 a pound";
      break;
    case "orange":
      answer = "Oranges are $3.00 a pound";
      break;
    case "bananas":
    case "peaches":
      answer = `${fruit} are 75 cents a pound`;
      break;
    default:
      answer = `Sorry, we are all out of ${fruit}`;
  }
  return answer;
}

// console.log(costOfFruit("peaches"));

/**
 * wonRaffle()
 * ------------
 * Takes in a number. If the number matches one
 * of the numbers, returns a message based on
 * that number. If the number is less than or equals 5 returns, "You
 * win first prize". If the number is between 5 and 10, returns:
 * 'You win second prize'. If the number is 10 and 15,
 * returns: 'You win third prize', Otherwise, it
 * will return: 'Sorry, you are not a winnder'
 * @param {number} ticket
 * @returns {string}
 */

// return will stop the rest of your function. code below it will not be read or evaluated. Thus no need for 'break'
function wonRaffle(ticket) {
  switch (true) {
    case ticket <= 5:
      return "You win first prize";
    case ticket <= 10:
      return "You win second prize";
    case ticket <= 15:
      return "You win third prize";
    default:
      "Sorry, you are not a winner";
  }
}

// console.log(wonRaffle(4));

//LOOPING AN OBJECT

// of and object both have o's so i keep them apart
// for ...of use with arrays
// for...in  use with objects

let obj = {
  fName: "JD",
  lName: "Richards",
  blind: "yes",
  arr: [1, 3, 4],
};

// p here is always going to represent the key of the object
function myObj(object) {
  for (key in object) {
    console.log("key", key);
    console.log("value", object[key]);
    if (Array.isArray(object[key])) {
      console.log(`${key} is an array`);
    }
  }
}

// myObj(obj);

// when we check to for datatypes in general we use typeof
// when we want to know if the datatype is an array we use Array.isArray()

let x = [1, 2, 3, 4];
console.log(Array.isArray(x)); // returns true
