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
// `buttonEl` is an `HTMLElement` object.

function disableLetterButton(buttonEl) {
  buttonEl.disabled = true;
  
}

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word

function isLetterInWord(letter) {
  
  if (word.includes(letter)) {
    return true;
  } else {
    return false;
  };

}


const handleCorrectGuess = (letter) => {

  const wordLength = word.length;  

  if (isLetterInWord(letter)) {
    const correctGuessLetters = document.querySelectorAll(`.${letter}`);

    for (const char of correctGuessLetters) {
      char.innerHTML = letter;
      correctGuesses += 1;

      if (wordLength === correctGuesses) {
        const playAgain = document.getElementById('play-again');
        playAgain.innerHTML = "You Won, Congratulation! Click here to play again."
        playAgain.style.display = 'block';
      };
    };    
  };

}


const handleWrongGuess = (letter) => {
  numWrong += 1;  
  
  let currentImg = document.getElementById('shark-img');
  const letterButtons = document.querySelectorAll('button');
  const playAgain = document.getElementById('play-again');

  currentImg.setAttribute('src', `/static/images/guess${numWrong}.png`);

  console.log(numWrong);
  if (numWrong === 5) {
    playAgain.style.display = 'block';
    for (const letterElement of letterButtons) {
          disableLetterButton(letterElement);
    };
  };

};


const buttonClicked = (evt) => {

  const targetBtn = evt.target;
  const letter = targetBtn.innerHTML;

  if (isLetterInWord(letter) === true) {
    handleCorrectGuess(letter);
    disableLetterButton(targetBtn);
  } else {
    handleWrongGuess(letter);
    disableLetterButton(targetBtn);
  };
  
}


const resetGame = () => {
  window.location = '/sharkwords';

}

// This function is called to start the game.
function startGame() {
  createDivsForChars();
  generateLetterButtons();

  const buttons = document.querySelectorAll('#letter-buttons button');
  const startGameAgain = document.getElementById('play-again');
  

  for (const button of buttons) {
    
    button.addEventListener('click', buttonClicked);

  };

  startGameAgain.addEventListener('click', resetGame);

}


startGame(); // Call startGame() when the page loads.

