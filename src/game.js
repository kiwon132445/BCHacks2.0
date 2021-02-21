var config = {
    type: Phaser.AUTO,
    parent: 'container',
    dom: {
        createContainer: true,
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
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