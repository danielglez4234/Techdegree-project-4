/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
// The game starts and resets when the "start game" button is clicked
$('#btn__reset').click(function(){
  game = new Game();
  game.startGame();
  game.resetGame();

  // triggered the animation by adding a class to the botton
  $('#btn__reset').addClass('btn__reset_animation');
  // and the same for the title "PHRASE HUNTER"
  $('.title').addClass('title_animation');
});

    // when a letter is clicked it is sent to the function "handleInteraction"
    $('.key').click(function(event){
      const key = event.target;
      game.handleInteraction(key);
    });
    // when a physical key is pressed it is sent to the function "handleInteraction"
    $('body').keyup(function(event){
      const key = event.key;
      const onScreenButtons = $('.key');
      // check that the key that was pressed is between the letters shown on the screen
      for (var i = 0; i < onScreenButtons.length; i++) {
        if (onScreenButtons[i].textContent === key) {
          game.handleInteraction(onScreenButtons[i]);
        }
      }
    });
