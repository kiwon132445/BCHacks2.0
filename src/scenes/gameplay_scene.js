class gameplay_scene extends Phaser.Scene {
    constructor() {
        super({
          key: 'gameplay_scene',
        });
    }

    init() {
        this.covid = this.physics.add.group();
        this.counter = 0;
        this.difficulty = 20;
    }

    preload() {
        this.load.image('player', '../../assets/dog.jpg');
        this.load.image('covid', '../../assets/covid.jpg')
    }

    create() {
        this.addPlayer();
        for(let i = 0; i < 10; i++) {
            this.spawnCovid();
        }
        this.physics.add.overlap(this.player, this.covid, this.infection, null, this);

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
        if (this.counter >= this.difficulty && this.covid.children.entries.length <= 100) {
            this.spawnCovid();
            this.counter = 0;
            this.difficulty += 1;
        }
        for (let i = 0; i < this.covid.children.entries.length; i++) {
            this.covid.children.entries[i].fallingCovid();
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
          Phaser.Math.Between(100, 300)
        );

        this.add.existing(covid).setScale(0.01);
        this.physics.add.existing(covid);
        this.covid.add(covid);
    }

    die() {
        this.scene.start("game_over_scene")
    }

    infection(player, covid) {
        covid.disableBody(true, true);
        player.playerHealth-=1;
        if(player.playerHealth <= 0) {
            this.die();
        }
    }
}