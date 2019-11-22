/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
   constructor(){
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = `null`;
  }
  // * Creates phrases for use in game
  // * @return {array} An array of phrases that could be used in the game
  createPhrases(){
    const phrasesArray = [
      {phrase: 'May the force be with you'},
      {phrase: 'The stuff that dreams are made of'},
      {phrase: 'Show me the money this is a robbery'},
      {phrase: 'Tomorrow is another day'},
      {phrase: 'Houston we have a problem'}
    ];
    return phrasesArray;
  }

  // * Selects random phrase from phrases property
  // * @return {Object} Phrase object chosen to be used
  getRandomPhrase(){
    const phraseArray = this.phrases;
    const randomPhrase = new Phrase(phraseArray[Math.floor(Math.random() * phraseArray.length)].phrase);
    return randomPhrase;
  };

  // * Begins game by selecting a random phrase and displaying it to user
  startGame(){
    $('#overlay').delay(1000).slideUp(800);
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  // * reset the "missed" property and return the hearts and keyboard to default
  resetGame(){
    this.missed = 0;
    $('.tries img').attr('src', 'images/liveHeart.png');
    $('.key').removeClass('wrong').removeClass('chosen');
  }

  // * Checks for winning move
  // * @return {boolean} True if game has been won, false if game wasn't won
  checkForWin(){
    let countTrueLetters = 0;
    const lettersFound = $('.letter');
    for (var i = 0; i < lettersFound.length; i++) { // loop over each key
      if (lettersFound.eq(i).hasClass("show")) { // if true add 1 to the counter
        countTrueLetters += 1;
        /* if the counter becomes equal to the length of "lettersFound"
           it means that all the letters have been discovered */
        if (countTrueLetters === lettersFound.length) {
          return true;
        }
      }else {
        return false;
        break;
      }
    }
  };

  // * Increases the value of the missed property
  // * Removes a life from the scoreboard
  // * Checks if player has remaining lives and ends game if player is out
  removeLife(){
    $('.tries img').eq(this.missed).attr('src', 'images/lostHeart.png');
    this.missed += 1
    if (this.missed === 5) {
      this.gameOver(false);
    }
  };

  // * Displays game over message
  // * @param {boolean} gameWon - Whether or not the user won the game
  gameOver(gameWon){
    if (gameWon){
      $('#overlay').removeClass('lose').removeClass('start').addClass('win');
      $('#game-over-message').text('✨ You Won! Great Job! ✨');
      $('#overlay').slideDown(500);

      //this prevents the start button animation from being triggered when the "win" or "lose" screen appears
      $('#btn__reset').removeClass('btn__reset_animation');
    }else {
      $('#overlay').removeClass('win').removeClass('start').addClass('lose');
      $('#game-over-message').text('😱 Sorry, better luck next time! ❌');
      $('#overlay').slideDown(500);

      $('#btn__reset').removeClass('btn__reset_animation');
    }
  };

// * Handles onscreen keyboard button clicks
// * @param (HTMLButtonElement) button - The clicked button element
/* --- In this section I Avoided using JQUERY for some things that didn't work,
       this section is all javascript*/
  handleInteraction(button) {
    // check if the button has already been pressed checking if they already have any of these two classes
    if (!button.classList.contains('chosen') && !button.classList.contains('wrong')) {
      if (this.activePhrase.checkLetter(button.textContent)) { // check that the letter is in the phrase
        button.classList.add('chosen');
        this.activePhrase.showMatchedLetter(button.textContent);
      }else {
        this.removeLife();
        button.classList.add('wrong');

        //--------- Shake heart animation -----------------------
        // here I allow the animation to run every time a failed attempt is sent
        const element = document.getElementById("scoreboard_ol");
        element.classList.remove("scoreboard_shake");
        void element.offsetWidth;
        element.classList.add("scoreboard_shake");
      }
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  };


 }
