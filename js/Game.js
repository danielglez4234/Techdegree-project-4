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
  };

  // * Checks for winning move
  // * @return {boolean} True if game has been won, false if game wasn't won
  checkForWin(){

  };

  // * Increases the value of the missed property
  // * Removes a life from the scoreboard
  // * Checks if player has remaining lives and ends game if player is out
  removeLife(){

  };

  // * Displays game over message
  // * @param {boolean} gameWon - Whether or not the user won the game
  gameOver(gameWon){

  };


 }
