/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
   constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  // * Display phrase on game board
  addPhraseToDisplay(){
    const theActualPhrase = this.phrase;
    const $ul = $('#phrase ul');
    for (var i = 0; i < theActualPhrase.length; i++) {
      const $li = $('<li class="hide letter '+ theActualPhrase.charAt(i) +'">'+ theActualPhrase.charAt(i) +'</li>');
      const $liSpace = $('<li class="hide space" display="none"></li>');
      if (theActualPhrase.charAt(i) != ' ') {
        $ul.append($li);
      }else {
        $ul.append($liSpace);
      }
    }
  }


  // * Checks if passed letter is in phrase
  // * @param (string) letter - Letter to check
  checkLetter(letter){
    var matchLetter = this.phrase.includes(letter);
    return matchLetter;
  };

  // * Displays passed letter on screen after a match is found
  // * @param (string) letter - Letter to display
  showMatchedLetter(letter){

  };



 }
