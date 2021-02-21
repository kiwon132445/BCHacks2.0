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
        this.spawnCovid();

        const screenCenterX = this.cameras.main.worldView.x + screenX / 2;
        const screenCenterY = this.cameras.main.worldView.y + screenY / 2;

        this.add
        .text(screenCenterX, screenCenterY , 'Game Over', {
            font: '50px Ariel',
            fill: 'blue',
        })
        .setOrigin(0.5); 

        this.playButton = this.add.text(screenCenterX - 45, screenCenterY, 'Go Back', {font: '45px Ariel', fill: 'white'})
            .setInteractive()
            .on('pointerup', () => {
                this.die()
            })
    }
    
    update() {
        //the player control
        this.player.player_controls();
        for (let i = 0; i < this.covid.length; i++) {
            console.log(2);
            this.covid[i].fallingCovid();
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
            x: Phaser.Math.Between(0, this.scale.width),
            y: 0,
            sprite: 'covid',
          },
          200
        );

        this.add.existing(this.player).setScale(0.01);
        this.physics.add.existing(this.player);
        this.covid.add(covid);
        console.log(this.covid)
    }

    die() {
        this.scene.start("game_over_scene")
    }

}