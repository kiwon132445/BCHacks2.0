class gameplay_scene extends Phaser.Scene {
    constructor() {
        super({
          key: 'gameplay_scene',
        });
    }

    init() {
        this.covid = this.physics.add.group();
    }

    preload() {
        this.load.image('player', '../../assets/dog.jpg');
        this.load.image('covid', '../../assets/covid.jpg')
    }

    create() {
        this.addPlayer();
    }
    
    update() {
        //the player control
        this.player.player_controls();
    }

    //This adds the player to the game
    addPlayer() {
        this.player = new Player(
          {
            scene: this,
            x: this.scale.width/2,
            y: this.scale.height/2,
            sprite: 'player',
          },
          200,
          this.covid
        );
    
        this.add.existing(this.player).setScale(0.01);
        this.physics.add.existing(this.player);
        this.player.setCollideWorldBounds(true);
    }

    spawnCovid() {

    }
}