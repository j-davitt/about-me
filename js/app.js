'use strict';

// TODO: GET USERS NAME - prompt - alert greeting back to user

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Answer the following questions with yes or no (y/n)`);

// TODO: prompt with 5 yes or no questions, alert if they got the answer right or wrong

let questionOne = prompt('Do I have a son?').toLowerCase();

if (questionOne === 'yes' || questionOne === 'y') {
  alert('Correct!');
} else if (questionOne === 'no' || questionOne === 'n') {
  alert('Wrong!');
}

let questionTwo = prompt('Do I have any pets?').toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y') {
  alert('Correct! I have 2 dogs.');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert('Wrong! I have 2 dogs.');
}

let questionThree = prompt('Do I have a whiskey problem, err I mean collection?').toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert('Correct! Moving on!');
} else if (questionThree === 'no' || questionThree === 'n') {
  alert('Wrong! Onward!');
}

let questionFour = prompt('Do I have a jet ski?').toLowerCase();

if (questionFour === 'yes' || questionFour === 'y') {
  alert('No, I wish.');
} else if (questionFour === 'no' || questionFour === 'n') {
  alert('Sadly, that is correct.');
}

let questionFive = prompt('Do I have a face tattoo?').toLowerCase();

if (questionFive === 'yes' || questionFive === 'y') {
  alert('Wrong, but I am open to it.');
} else if (questionFive === 'no' || questionFive === 'n') {
  alert('As of right now that is correct!');
}

//TODO: give personalized message at the end

alert(`Thanks for participating ${userName}!`);

