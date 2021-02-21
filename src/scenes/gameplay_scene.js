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
        this.load.image('background','../../assets/background.png');
        this.load.image('player', '../../assets/dog.jpg');
        this.load.image('covid', '../../assets/covid.jpg')
        this.load.image('statusBar','../../assets/Bar.jpg')
    }

    create() {
        this.background = this.add.tileSprite(0,0,config.width,config.height,"background");
        this.background.setOrigin(0,0);
        
        // var statusBar=new statusBar();
        // statusBar.x=game.width/2-statusBar;
        // statusBar.y=game.height/2;
        // statusBar.setPercent()

        this.addPlayer();

        for(let i = 0; i < 10; i++) {
            this.spawnCovid();
        }
        
        this.physics.add.overlap(this.player, this.covid, this.infection, null, this);

        const screenCenterX = this.cameras.main.worldView.x + screenX / 2;
        const screenCenterY = this.cameras.main.worldView.y + screenY / 2;

        this.playButton = this.add.text(screenCenterX, screenCenterY, 'Go Back', {font: '45px Ariel', fill: 'white'})
            .setInteractive()
            .on('pointerup', () => {
                this.die()
            })
    }
    
    update() {
        this.background.tilePositionY -=1.5;
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
          400,
          this.covid
        );
    
        this.add.existing(this.player).setScale(0.025);
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
          Phaser.Math.Between(100, 500)
        );

        this.add.existing(covid).setScale(0.05);
        this.physics.add.existing(covid);
        this.covid.add(covid);
    }

    die() {
        this.scene.start("game_over_scene")
    }

    infection(player, covid) {
        covid.disableBody(true, true);
        player.playerHealth-=1;
        console.log("Player Health: " + player.playerHealth);
        if(player.playerHealth <= 0) {
            this.die();
        }
    }
}