/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
   constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  // * Display phrase on game board
  addPhraseToDisplay(){
    const $ul = $('#phrase ul');
    const ifExistsPhrase = $('#phrase ul li');
    ifExistsPhrase.remove();

    const theActualPhrase = this.phrase;
    for (let i = 0; i < theActualPhrase.length; i++) {
      const $li = $('<li class="hide letter '+ theActualPhrase.charAt(i) +'">'+ theActualPhrase.charAt(i) +'</li>');
      const $liSpace = $('<li class="hide space"></li>');
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
    const matchLetter = this.phrase.includes(letter);
    return matchLetter;
  };

  // * Displays passed letter on screen after a match is found
  // * @param (string) letter - Letter to display
  showMatchedLetter(letter){
    const $printedPhrase = $('.letter');
    for (let i = 0; i < $printedPhrase.length; i++) {
      if ($printedPhrase[i].textContent === letter) {
        $printedPhrase.eq(i).addClass('show');
      }
    }
  };



 }
