/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

var game;
    $('#btn__reset').click(function(){
      game = new Game();
      game.startGame();
    });

    $('.key').click(function(event){
      const key = event.target;
      game.handleInteraction(key);
    });
    $('body').keyup(function(event){
      const key = event.key;
      const onScreenButtons = $('.key');
      for (var i = 0; i < onScreenButtons.length; i++) {
        if (onScreenButtons[i].textContent === key) {
          game.handleInteraction(onScreenButtons[i]);
        }
      }
    });
