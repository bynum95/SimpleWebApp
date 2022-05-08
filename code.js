const wordbank = ['test', 'test2', 'test3']

let final = wordbank[Math.floor(Math.random()*wordbank.length)]
console.log(final)




let remainingGuesses = 6

//Tierra
//need to figure out why the right leg isnt showing when logged to the console
hangManGraphics = {
  1: `     o   `,
  2: `     o/  `,
  3: `     o/    
    /    `,
  4: `     o/    
    /|   `,
  5: `     o/    
    /| 
    /   `,
  6: `     o/    
    /| 
    / /  `
}

function print() {
// print clue: phrase
// print guessed letters
// print remainingGuesses
// hangmanGraphic(remainingGuesses);

  // console.log(guessedPhrase)
  // console.log(guessedLetters)
  console.log("remainginGuesses: " + remainingGuesses)
function hangMan (num) {
return console.log(hangManGraphics[num])
}
return hangMan(remainingGuesses)
}

print()
