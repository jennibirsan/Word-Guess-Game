var listofRappers = [
   "Tupac",
   "BiggieSmalls",
   "JayZ",
   "Ludacris",
   "Plies",
   "Drake",
   "Eminem",
   "MachineGunKelly",
   "ChildishGambino",
   "Logic",
   "KanyeWest",
   "JuiceWRLD",
   "MaxoKream",
   "GucciMane",
   "XXXTentacion",
   "Saweetie",
   "TPain",
   "ChancetheRapper",
   "PushaT",
   "BigSean",
   "MeekMill",
   "KendrickLamar",
   "VinceStaples",
   "Migos"
];

// Number of words = 25. That means my index = 24, since it starts w/ 0.


// The below pseudocode was mimicked from Phil's example in class!!!! 
// In my own words, I have commented below each function to discuss the meaning or reasoning, so it's not just copied w/o understanding.
// Lastly, I found a website that has explained how to build a word guessing game. Link: https://nostarch.com/download/JS4K_ch7.pdf.
// I used the pdf above to help explain and guide me through the game.

var computerRandIndex = Math.floor(Math.random() * listofRappers.length);

// the computer picks my random word for the user to guess. 
// You have to use math.floor(math.random()) to get a WHOLE number versus a random decimal. 
// I multiplied it by my listofRappers.length for the computer to pick one of the words from my array. 
// Use .length instead of the actual index number in case the length of the list ever changes.

var computerPickWord = listofRappers[computerRandIndex];
var computerPickWordLower = computerPickWord.toLowerCase();
console.log(computerPickWordLower);

// The computer picks a word from my index at random -- no specific order

var numberofGuessCount = 12;

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

var lettersLeft = document.getElementById("remainingGuesses");

// We’ll use this variable to keep track of how many letters are left to be guessed. 

var completeWins = document.getElementById("wins");


// We’ll use this variable to keep track of how many times the player has won. 

for (var i = 0; i < computerPickWord.length; i++) {
   boardGame[i] = "_";
}
console.log("-->", wins, losses, numberofGuessCount)
$("#output").text(boardGame);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#remainingGuesses").text("Remaining Guesses: " + numberofGuessCount);

// For loop used for ending the loop of the computer picked word -- aka the number of characters in that randomly selected word.
// This also initializes the underscores so user can see the amount of characters in the computerPickWord.

var userInput = "";

// Will store any letter that the player inputs into the game

function resetGame() {
   computerRandIndex = Math.floor(Math.random() * listofRappers.length);

   computerPickWord = listofRappers[computerRandIndex];
   computerPickWordLower = computerPickWord.toLowerCase();
   console.log(computerPickWord)

   numberofGuessCount = 12;
   wrongGuessLetter = "";
   rightGuessLetter = "";
   boardGame = [];
   for (var i = 0; i < computerPickWord.length; i++) {
      boardGame[i] = "_";
   }
   $("#output").text(boardGame);
   $("#wins").text("Wins: " + wins);
   $("#losses").text("Losses: " + losses);
   $("#remainingGuesses").text("Remaining Guesses: " + numberofGuessCount);

};
// Note: I copied over all the elements that I want to access when resetting the game.  It was everything except the wins and losses b/c the player can continue to add to their wins and losses. 

// ----------- now that pseudocode is complete, we are activating the game below // again, also using Phil's example from slack, class #hw-help.

document.onkeyup = function (event) {
   userInput = event.key.toLowerCase();
   var displayBoardDiv = document.getElementById("output");
   displayBoardDiv.textContent = boardGame.join(" ");
   if (computerPickWordLower.indexOf(userInput) > -1) {
      boardGame[computerPickWordLower.indexOf(userInput)] = userInput;
      displayBoardDiv.textContent = boardGame.join(" ");
      console.log(computerPickWord, rightGuessLetter)
      if (computerPickWord === rightGuessLetter) {
         wins++;
         console.log("wins")
         resetGame();

      };

      for (var index = computerPickWordLower.indexOf(userInput) + 1; index < computerPickWordLower.length; index++) {
         if (computerPickWordLower.indexOf(userInput, index) > -1) {
            boardGame[computerPickWordLower.indexOf(userInput, index)] = userInput;
            displayBoardDiv.textContent = boardGame.join(" ");
            rightGuessLetter = boardGame.join("").trim();
            console.log(computerPickWordLower, rightGuessLetter)
            if (computerPickWordLower === rightGuessLetter) {
               console.log("win!")
               wins++;

               completeWins.textContent = "Wins:" + wins;
               resetGame();

            };
         }

      }
   }
   else {
      numberofGuessCount = numberofGuessCount - 1;
      $("#remainingGuesses").text("Remaining Guesses: " + numberofGuessCount);
      wrongGuessLetter = wrongGuessLetter + userInput + ", ";
      $("#wrongGuess").text("Wrong Letters Guessed: " + wrongGuessLetter);
      if (numberofGuessCount === 0) {
         console.log("losses")
         losses++;
         resetGame();
      };
   }

};