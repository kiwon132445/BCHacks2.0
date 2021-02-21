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
        this.load.image('background','../../assets/background.png');
        this.load.image('player', '../../assets/dog.jpg');
        this.load.image('covid', '../../assets/covid.jpg')
    }

    create() {
        this.background = this.add.tileSprite(0,0,config.width,config.height,"background");
        this.background.setOrigin(0,0);
        this.addPlayer();
    }
    
    update() {
        this.background.tilePositionY -=0.5;
        //the player control
        this.player.player_controls();
        for (i in this.covid) {
            
        }
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
        let covid = new Covid(
            {
            scene: this,
            x: Phaser.Math.Between(0, config.width),
            y: 0,
            sprite: 'covid',
          },
          200,
          this.covid
        );

        this.add.existing(this.player).setScale(0.01);
        this.physics.add.existing(this.player);

        this.covid.add(covid);
    }
}