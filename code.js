// declare all our variables
let phrase;
let clue;
let guess;
let guessedPhrase;
let remainingGuesses = 6;
let guessedLetters = [];
let gameOver = false;
let winner = false;
let player = prompt("What is your name?");

const phraseDatabase = [
  { 
    clue: 'PLACE',
    phrase: 'THE SWISS ALPS'
  },
  {
  clue: 'THING',
  phrase: 'A DEFLATED FOOTBALL'
  },
  {
    clue: 'MUSICIAN',
    phrase: 'HILARY DUFF'
  },
  {
  clue: 'MUSICIAN',
  phrase: 'STEVIE WONDER'
  },
  {
  clue: 'DISNEY ANIMATION',
  phrase: 'WINNIE THE POOH'
  },
  {
  clue: 'NBA TEAM',
  phrase: 'LOS ANGELES LAKERS'
  },
  {
  clue: 'MUSICIAN',
  phrase: 'FRANK OCEAN'
  },
  {
  clue: 'FOOD',
  phrase: 'HOT CHEETOS'
  },
  {
  clue: 'DISNEY CHARACTER',
  phrase: 'JACK SKELLINGTON'
  },
  {
  clue: 'THING',
  phrase: 'NINTENDO SWITCH'
  },
  {
  clue: 'CANDY',
  phrase: 'SOUR PATCH KIDS'
  },
  {
  clue: 'MUSICIAN',
  phrase: 'BEYONCE'
  },
  {
  clue: 'MOVIE',
  phrase: 'THE LION KING'
  },
  {
  clue: 'GAME',
  phrase: 'CARDS AGAINST HUMANITY'
  },
  {
  clue: 'PLACE',
  phrase: 'ZION NATIONAL PARK'
  },
  {
  clue: 'CARTOON',
  phrase: 'SPONGEBOB SQUAREPANTS'
  },
  {
  clue: 'MOVIE',
  phrase: "FERRIS BUELLER'S DAY OFF"
  },
  {
  clue: 'MOVIE',
  phrase: 'AVENGERS: ENDGAME'
  }
]

//Hangman Function
function hangman() {
  initialize();
 
  while (!gameOver) {
    print(); //prints all information
    // prompt(); // gets guess from user 
    guess = getChar('Please enter a letter from A - Z:')
    check(guess); // checks guess and updates variables including gameOver to break while loop
  }

  print(); //print a win or lose message here using gameOver and winner variables for a conditional?
  // ask to play another game?

  if (phraseDatabase.length === 0) {
    console.log("That's all folks!  Thanks for playing hangman!")
  }
  
  else if (getChar('Would you like to play another game?') === 'Y') {
    hangman();
  }
}

//Nolan
function initialize(){
  console.log('');
  console.log('------------------');
  alert("Welcome to Hangman, " + player + "!")
  console.log('------------------');
  console.log('');
  //retrieve random phrase object from dataBank
  const randomNumIndex = Math.floor(Math.random()*phraseDatabase.length);
  obj = phraseDatabase[randomNumIndex];
  phraseDatabase.splice(randomNumIndex, 1);
  //store phrase as array and clue as string
   phrase = obj.phrase.split('')
   clue = obj.clue
  //declare new player guess array of ____ (still print spaces and special characters)
   guessedPhrase = new Array(phrase.length)
  for(let i = 0; i < guessedPhrase.length; i++){
    
    //spaces and special characters case
    if(phrase[i] < "A" || phrase[i] > "Z"){
      guessedPhrase[i] = phrase[i];
    }
    else if(phrase[i] !== ' '){
      guessedPhrase[i] = '_'
    }
  }
  guessedLetters = []
  remainingGuesses = 6
  gameOver = false
  winner = false
 
  //test console logs
  // console.log(phrase)
  // console.log(clue)
  //console.log(guessedPhrase.join(''))
  // console.log(remainingGuesses)
  // console.log(guessedLetters)
  
}

//test callback for Initalize
//Initialize();

//Tierra           

// playing the game print
// game is over and winner is true
// game if over and winner is false

function print() {
 const loserDatabase = ["Well, they can't all be winners, now can they?", "As far as losers go, you win.", "#LOSER", "LOL, Atleast you tried.", "The best loser I've ever known.", "Hashtag FAIL"]
const winnerDatabase = ["WINNER WINNER CHICKEN DINNER!", "Today's forecast: 100% CHANCE OF WINNING!", "Here's to you you fabulous winner!", "ALL I DO IS WIN WIN WIN NO MATTER WHAT!" ]
function printHangman (num) {
    
   const hangManGraphics = {
      6: `        `,
      5: `         o   `,
      4: `         o/  `,
      3: `         o/    
        /    `,
      2: `         o/    
        /|   `,
      1: `         o/    
        /| 
        /   `,
      0: `         o/    
        /| 
        / \\  `
    }   
     return console.log(hangManGraphics[num]);
  }
  
  console.log('');
  
  if (!gameOver){
  console.log("Clue: " + clue)
  console.log(guessedPhrase.join(""))
  console.log('');
  console.log('Already Guessed: ' + guessedLetters.join(', '))
  console.log("Remaining Guesses: " + remainingGuesses)
  console.log('');
  printHangman(remainingGuesses);
  console.log('');
  console.log('');
 }
  else if (winner) {
    console.log(winnerDatabase[Math.floor(Math.random()*winnerDatabase.length)])
  console.log('You guessed: ', guessedPhrase.join(""), 'correctly!');
    console.log('');
  }
  else { 
   console.log('');
    printHangman(remainingGuesses);
    console.log('');
    console.log(loserDatabase[Math.floor(Math.random()*loserDatabase.length)]);
  console.log('The phrase was: ', guessedPhrase.join(""));
    console.log('');
    
  }
}

function check (guess) {
  // add guess to guessedLetters
  if (!guessedLetters.includes(guess)) {
    guessedLetters.push(guess);
  }

  // sort alphabetically
  guessedLetters.sort((a,b) => {
    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  });
  
  // check if guess is in phrase
  if (phrase.includes(guess)) {
    
    //if so, update guessedPhrase
    phrase.forEach((element, index) => {
      if (element === guess) {
        guessedPhrase[index] = guess;
      }  
    })
    
    // check for win ???
    if (!guessedPhrase.includes('_')) {
      gameOver = true;
      winner = true;
      // console.log('You Win!')
      // print();
    }
    
  } else {
    remainingGuesses -= 1;
    // check for loss ???
    if (remainingGuesses <= 0) {
      gameOver = true;
      // console.log('Game Over :(')
      // print();
    }
  }
}

//new getChar
function getChar(msg) {
  let input = prompt(msg).toUpperCase();

  if (!gameOver) {
    while (true) {
      if (guessedLetters.includes(input)) {
        alert(`${input} has already been guessed! Please enter a new guess, ${player}.`)
      } else if ((/[A-Z]/).test(input) && input.length == 1) {
        break;
      } else {
        alert("Invalid entry, please enter a single character\n")
      }
      input = prompt(msg).toUpperCase()
    }
  }

  if (gameOver) {
    while (true) {
      if (input == 'Y' || input == 'N'){
        break;
      } else {
        alert("Invalid entry, please enter Y or N")
      }
      input = prompt(msg).toUpperCase()
    }
  }
  return input
}

//initializing the game
hangman();
