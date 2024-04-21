const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;
let correctGuesses = 0;

// For now, we'll hardcode the word that the user has to guess
// You can change this to choose a random word from WORDS once you
// finish this lab but we hard code it so we know what the word is
// and can tell if things look correct for this word


const wordToGuess = (listOfWords) => {

  const randomIndex = Math.floor(Math.random() * listOfWords.length);

  const word = listOfWords[randomIndex];

  return word;

}

const word = wordToGuess(WORDS);

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
function createDivsForChars() {
  
  for (const char of word) {
    document.querySelector('#word-container').insertAdjacentHTML('beforeend', `<div class="letter-box ${char}"></div>`);
  };

}


// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
function generateLetterButtons() {
  
  const letterButtons = document.querySelector('#letter-buttons');

  for (letter of ALPHABET) {
    letterButtons.insertAdjacentHTML("beforeend", `<button>${letter}</button>`);
  };
}

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
function disableLetterButton(buttonEl) {  
  buttonEl.disabled = true;
  
}

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works
function isLetterInWord(letter) {
  
  if (word.includes(letter)) {
    return true;
  } else {
    return false;
  };

}

const handleCorrectGuess = (letter) => {

  if (isLetterInWord(letter)) {
    const correctGuessLetters = document.querySelectorAll(`.${letter}`);

    for ( const char of correctGuessLetters) {
      char.innerHTML = letter;
    };    
  };

}


const handleWrongGuess = () => {
  // still to implement
}

const buttonClicked = (evt) => {
  // get the button that was clicked using the event target
  // get the letter inside the button that was clicked
  // you should then check if the letter is in the word
  // if it is, call `handleCorrectGuess`
  // if it is not, call `handleWrongGuess`
  // finally, disable the button so the letter can't be clicked again
  // YOUR CODE HERE

  const targetBtn = evt.target;
  const letter = targetBtn.innerHTML;

  if (isLetterInWord(letter) === true) {
    handleCorrectGuess(letter);
    disableLetterButton(targetBtn);
  } else {
    handleWrongGuess(); // still to implement this else part of this function
  }
  
}

// This function is called to start the game.
function startGame() {
  createDivsForChars();
  generateLetterButtons();

  const buttons = document.querySelectorAll('#letter-buttons button');

  for (const button of buttons) {   
    
    button.addEventListener('click', buttonClicked);    

  };

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
}

startGame(); // Call startGame() when the page loads.



//TODO: Continue from handleWrongGuess function
