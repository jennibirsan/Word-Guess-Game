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

// The below pseudocode was mimicked from Phil's example in class!!!! 
// In my own words, I have commented below each function to discuss the meaning or reasoning, so it's not just copied w/o understanding.
// Lastly, I found a website that has explained how to build a word guessing game. Link: https://nostarch.com/download/JS4K_ch7.pdf.
// I used the pdf above to help explain and guide me through the game.

   var computerRandIndex  = math.floor(math.random() *  listofRappers.length);
   
   var computerPickWord = listofRappers [computerRandIndex];

   var numberofGuessCount = 7;

   var wins = 0;

   var losses = 0;

   var wrongGuessLetter = "";

   var rightGuessLetter = "";

   var boardGame = [];

   for (var i=0; i <computerPickWord; i++) {
      boardGame[i] = "_";
   }

   var userInput = "";

   function resetGame () {

   }
