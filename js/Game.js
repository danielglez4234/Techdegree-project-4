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
    const randomPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)].phrase;
    return randomPhrase;
  };

  // * Begins game by selecting a random phrase and displaying it to user
  startGame(){
    $('#overlay').slideUp(1000);
    const activePhrase = this.getRandomPhrase();
    const phrase = new Phrase(activePhrase);
    phrase.addPhraseToDisplay();
    this.activePhrase = activePhrase;
    this.missed = 0;
    $('.tries img').attr('src', 'images/liveHeart.png');
  };

  // * Checks for winning move
  // * @return {boolean} True if game has been won, false if game wasn't won
  checkForWin(){
    let countTrueLetters = 0;
    const lettersFound = $('.letter');
    for (var i = 0; i < lettersFound.length; i++) {
      if (lettersFound.eq(i).hasClass("show")) {
        countTrueLetters += 1;
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
      $('#game-over-message').text('You Won! Great Job!');
      $('#overlay').slideDown(500);
    }else {
      $('#overlay').removeClass('win').removeClass('start').addClass('lose');
      $('#game-over-message').text('Sorry, better luck next time!');
      $('#overlay').slideDown(500);
    }

  };


 }
