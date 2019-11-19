/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase();
// const game = new Game();

// store phrase
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// console phrase
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// Random phrase
// const logPhrase = (phrase) => {
// console.log(`Phrase - phrase: `, phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// print the random phrase
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase);
// phrase.addPhraseToDisplay();

//test start game method
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase}`);

var game;
    $('#btn__reset').click(function(){
      game = new Game();
      game.startGame();
    });
