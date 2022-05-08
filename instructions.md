phrase = [michael's phrase!]
guessedPhrase = [_______'_ ______!]
remainingGuesses = 6;
guessedLetters = [H]
hangManGraphics = {
  1: "    o   ",
  2: "    o/  ",
  3: "    o/    
         /    ",
  4: "    o/    
         /|   ",
  5: "    o/    
         /| 
          /   "
  6: "    o/    
         /| 
          /\  "
}

phraseDatabase = [
{ clue: PLACE,
  phrase: "THE SWISS ALPS"
},
{
  clue: THING,
  phase: "A DEFLATED FOOTBALL"
}
]


->___H___'_ _H____!

guesses.includes[H] 'guess again baby!'
a 

*****
 o/    
/|      
 /\
*****

console.log("      o")
console.log("       ")


if turnsLeft == 6 console.log(hangman[1])
if turnsLeft == 5 console.log(hangman[2)
---------------------------------------------------------------

when we play the game
1. grab a random phrase / clue set
2. turn that into our array pairs
  a) initialize remainingGuesses and guessedLetters
3. first print:
  - clue: emptyphrase
  - hangman
  - remaining Guesses
4. prompt for a single letter guess
5. take that value and check if letter in phrase
  YES?
      - update guessedPhrase

      **** check for win *****
        if !guessedArray.include('_') YES - print winningInfo and break;
     
      - add letter to guessedLetters
  NO?
      - add letter to guessedLetters
      - update remainingGuesses--
6. print again
- updated guessedPhrase
- updated guessedLetters
- updated remainingGuesses
- updated hangmanGraphic
      - move/print next piece of the hangman graphic
7. prompt

ARU_A
ARUBA

if guessedArray.include('_')
console.log(win)

1. Initialize 
2. Print
3. Prompt
4. Check
5. Print
6. Prompt
7. Check

Initialize ()
// no input
// no output
// retrieve random phrase from dataBank
// store as array in phrase
// store as array of ______ in guessedPhrase (still print spaces and special characters)
// initialize remaining guesses to 6
// initialize guessedLetters to empty array

Print() (characters printed as CAPS)
// print clue: phrase
// print guessed letters
// print remainingGuesses
// hangmanGraphic(remainingGuesses);

  console.log(guessedPhrase)
  console.log(guessedLetters)
  console.log(remainingGuesses)
function hangMan (num) {
return hangManGraphics[num]
}
return hangManGraphics(remainingGuesses)

let phrase = {city: 'new york' } 

clue = phrase.keys() -> ['city']

Prompt()
// ask for user input
// must be single letter a-z.
  // if not, try again
// this value is stored as the variable guess

Check()
// check if guess is in phrase
  // if YES
    - update guessedPhrase
      **** check for win *****
        if !guessedArray.include('_') YES - print winningInfo and break;
     - add letter to guessedLetters

  // if NO
      - add letter to guessedLetters
      - update remainingGuesses--


function hangman () {
dataBank = [{clue: "blah blah", phrase: 'bloooooooo'}, {}, {}]
phrase = [hello];
guessedPhrase = [_____];
clue = 'COMMON GREETING:';
remainingGuesse = 6;
hangmanGraphics = [];
guessedLetters = [];

intialize();
print();


}
