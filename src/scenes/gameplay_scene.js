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
    }

    create() {
        this.addPlayer();
    }
    
    update() {
        this.player.player_controls();
    }

    addPlayer() {
        console.log(this.scale.width)
        this.player = new Player(
          {
            scene: this,
            x: this.scale.width/2,
            y: this.scale.height/2,
            sprite: 'player',
          },
          300,
          this.covid
        );
    
        this.add.existing(this.player).setScale(0.1);
        this.physics.add.existing(this.player);
      }
}