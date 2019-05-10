var listofRappers = [
   "Tupac",
   "Biggie Smalls",
   "Jay Z",
   "Ludacris",
   "Plies",
   "Drake",
   "Eminem",
   "Machine Gun Kelly",
   "Childish Gambino",
   "Logic",
   "Kanye West",
   "Juice WRLD",
   "Maxo Kream",
   "Gucci Mane",
   "XXX Tentacion",
   "Saweetie",
   "T Pain",
   "Chance the Rapper",
   "Pusha T",
   "Big Sean",
   "Meek Mill",
   "Kendrick Lamar",
   "Vince Staples",
   "YG",
   "Migos"
];

// Number of words = 25. That means my index = 24, since it starts w/ 0.


// The below pseudocode was mimicked from Phil's example in class!!!! 
// In my own words, I have commented below each function to discuss the meaning or reasoning, so it's not just copied w/o understanding.
// Lastly, I found a website that has explained how to build a word guessing game. Link: https://nostarch.com/download/JS4K_ch7.pdf.
// I used the pdf above to help explain and guide me through the game.

var computerRandIndex = math.floor(math.random() * listofRappers.length);

// the computer picks my random word for the user to guess. 
// You have to use math.floor(math.random()) to get a WHOLE number versus a random decimal. 
// I multiplied it by my listofRappers.length for the computer to pick one of the words from my array. 
// Use .length instead of the actual index number in case the length of the list ever changes.

var computerPickWord = listofRappers[computerRandIndex];

// The computer picks a word from my index at random -- no specific order

var numberofGuessCount = 7;

// The number of guesses allowed before player "loses" is 7. 

var wins = 0;

// Wins starts at 0 and adds from there once word guess is solved

var losses = 0;

// Losses starts at 0 and adds from there once word guess is not solved within the allotted number of guesses.

var wrongGuessLetter = "";

// when the wrong letter is guessed (by player), a string is formed on the game board displaying the wrong letters 

var rightGuessLetter = "";

// when the right letter is guessed (by player), the letter appears on the board where the underscores are and reveals letters of the computerPickWord.

var boardGame = [];

// boardGame is blank because it needs to be the length of the computerPickWord

for (var i = 0; i < computerPickWord; i++) {
   boardGame[i] = "_";
}

// For loop used for ending the loop of the computer picked word -- aka the number of characters in that randomly selected word.
// This also initializes the underscores so user can see the amount of characters in the computerPickWord.

var remainingLetters = computerPickWord.length;

// We’ll use this variable to keep track of how many letters are left to be guessed. 

var userInput = "";

// Will store any letter that the player inputs into the game

function resetGame() {

}
