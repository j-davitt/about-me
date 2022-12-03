'use strict';

let score = 0;

function welcome() {
  let userName = prompt('What is your name?');

  alert(`Welcome to my site ${userName}! Answer the following questions with yes or no (y/n)`);

  return userName;
}

let userName = welcome();

function questionOne() {
  let questionOne = prompt('Do I have a son?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    alert('Correct!');
    score++;
  } else if (questionOne === 'no' || questionOne === 'n') {
    alert('Wrong!');
  }
}

questionOne();

function questionTwo() {
  let questionTwo = prompt('Do I have any pets?').toLowerCase();

  if (questionTwo === 'yes' || questionTwo === 'y') {
    alert('Correct! I have 2 dogs.');
    score++;
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    alert('Wrong! I have 2 dogs.');
  }
}

questionTwo();

function questionThree() {
  let questionThree = prompt('Do I have a whiskey problem, err I mean collection?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y') {
    alert('Correct! Moving on!');
    score++;
  } else if (questionThree === 'no' || questionThree === 'n') {
    alert('Wrong! Onward!');
  }
}

questionThree();

function questionFour() {
  let questionFour = prompt('Do I have a jet ski?').toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y') {
    alert('No, I wish.');
  } else if (questionFour === 'no' || questionFour === 'n') {
    alert('Sadly, that is correct.');
    score++;
  }
}

questionFour();

function questionFive() {
  let questionFive = prompt('Do I have a face tattoo?').toLowerCase();

  if (questionFive === 'yes' || questionFive === 'y') {
    alert('Wrong, but I am open to it.');
  } else if (questionFive === 'no' || questionFive === 'n') {
    alert('As of right now that is correct!');
    score++;
  }
}

questionFive();

function questionSix() {
  let myNum = '6';

  let numAttempts = 4;

  for (let i = 0; i < numAttempts; i++) {
    let questionSix = prompt('What number am I thinking of?');
    if (questionSix === myNum) {
      alert('Correct!');
      score++;
      break;
    } else if (questionSix > myNum) {
      alert('Too high!');
    } else if (questionSix < myNum) {
      alert('Too low!');
    }
    if (i === 3) {
      alert(`The correct answer was ${myNum}`);
    }
  }
}

questionSix();

function questionSeven() {
  const arr = ['scary spice', 'baby spice', 'ginger spice', 'posh spice', 'sporty spice'];

  let spiceAttempts = 6;

  for (let i = 0; i < spiceAttempts; i++) {
    let questionSeven = prompt('Name a Spice Girl').toLowerCase();
    if (arr.indexOf(questionSeven) >= 0) {
      alert('You really know your stuff!');
      score++;
      break;
    } else {
      alert('Try again');
    }
  }
  alert(`Accepted answers: ${arr}`);
}

questionSeven();

// Nested array example

// for (let i = 0; i < 6; i++) {
//   let questionSeven = prompt('Name a Spice Girl').toLowerCase();
//   for (let j = 0; j < arr.length; j++) {
//     if (questionSeven === arr[j]) {
//       alert('You really know your stuff!');
//       score++;
//       i = 6;
//       break;
//     }
//   }
// }

alert(`Thanks for participating ${userName}! You scored ${score} out of 7!`);
