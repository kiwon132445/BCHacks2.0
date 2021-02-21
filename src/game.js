var config = {
    type: Phaser.AUTO,
    parent: 'container',
    dom: {
        createContainer: true,
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1572,
        height: 1712,
    },
    physics: {
        default: 'arcade',
        arcade: {
          enableBody: true,
          debug: false,
        },
      },
    scene: [gameplay_scene, game_over_scene]
};

const game = new Phaser.Game(config);

window.addEventListener("keyup", ev => {
  if (ev.keyCode === 38) {
    //YOUR CODE HERE
    
    //example below
    document.body.innerHTML = "<h1 id='gameOn'>GAME ON!!!</h1>"
  }
});