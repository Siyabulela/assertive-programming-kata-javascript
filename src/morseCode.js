var letters = "abcdefghijklmnopqrstuvwxyz ".split(``);
var morse = ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. /".split(
  ` `
);
var wordToMorse = "";
var morseToWord = "";

function lettersToMorseCode(word) {
  word = word.toLowerCase().split("");

  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < letters.length; j++) {
      if (word[i] === letters[j]) {
        wordToMorse += morse[j] + " ";
      }
    }
  }
  return console.log(wordToMorse);
}

function morseCodeToLetters(morseCode) {
  morseCode = morseCode.toLowerCase().split(" ");

  for (var i = 0; i < morseCode.length; i++) {
    for (var j = 0; j < letters.length; j++) {
      if (morseCode[i] === morse[j]) {
        morseToWord += "" + letters[j];
      }
    }
  }
  return console.log(morseToWord);
}

lettersToMorseCode(`Hi there`);
morseCodeToLetters(".... .. / - .... . .-. .");
