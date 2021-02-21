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
        this.load.image('background','../../assets/background2.png');
        // this.load.sprite('player', '../../assets/open.png');
        this.load.spritesheet('player', '../../assets/blocky_walkleft.png', {
            frameWidth: 16,
            frameHeight: 20,
            endFrame: 3
        });

        this.load.image('covid', '../../assets/covid.png')
        this.load.image('statusBar','../../assets/Bar.jpg')
        this.load.image('mask','../../assets/mask.png')
    }

    create() {
        this.background = this.add.tileSprite(0,0,this.scale.width, this.scale.height,"background");
        this.background.setOrigin(0,0);
        
        this.addPlayer();

        this.hp = new HealthBar(this, this.scale.width - 520, 10, this.player);
        this.maskText = this.add.text(this.scale.width - 520, 100, 'Mask durability: ' + this.player.playerMask , {
            font: '50px Verdana',
            fill: 'white',
        }).setOrigin(0)

        for(let i = 0; i < 20; i++) {
            this.spawnCovid();
        }

        this.spawnMask();
        setInterval(() => {this.spawnMask()}, 7000)

        
        let config = {
            key: 'WalkCycle',
            frames: this.anims.generateFrameNumbers('player', {
              start: 0,
              end: 2,
            }),
            frameRate: 8,
            repeat: -1,
          };
          this.anims.create(config);    
        
        this.physics.add.overlap(this.player, this.covid, this.infection, null, this);
        this.physics.add.overlap(this.player, this.mask, this.resetMask, null, this);
        
        const screenCenterX = this.cameras.main.worldView.x + screenX / 2;
        const screenCenterY = this.cameras.main.worldView.y + screenY / 2;

        this.playButton = this.add.text(screenCenterX + 10, screenCenterY + 10, 'QUIT', {font: '65px Verdana', fill: 'white'})
            .setInteractive()
            .on('pointerover', () => this.buttonHoverState())
            .on('pointerout', () => this.buttonRestState())
            .on('pointerdown', () => this.buttonActiveState())
            .on('pointerup', () => {
                this.die()
            }).setOrigin(0); 
        
        this.startTime = new Date();
        
    }

    buttonHoverState() {
        this.playButton.setStyle({ fill: '#5DADE2'});
      }

    buttonRestState() {
        this.playButton.setStyle({ fill: 'white'});
      }

    buttonActiveState() {
        this.playButton.setStyle({ fill: 'blue' });
    }
    
    update() {
        this.hp.draw();
        this.background.tilePositionY -=1.5;
        //the player control
        this.player.player_controls();
        if (this.counter >= this.difficulty && this.covid.children.entries.length <= 100) {
            this.spawnCovid();
            this.counter = 0;
        }
        for (let i = 0; i < this.covid.children.entries.length; i++) {
            this.covid.children.entries[i].fallingCovid();   
        }
        this.mask.fallingMask();   

        if(this.player.playerMask <= 0) {
            this.die();
        }
        this.player.playerMask -= 0.03;
        this.maskText.text = 'Mask durability: ' + Math.floor(this.player.playerMask)
        // console.log(this.player.playerMask);

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
    
        this.add.existing(this.player).setScale(5);
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
          Phaser.Math.Between(200, 500)
        );
        this.add.existing(covid).setScale(0.1);
        this.physics.add.existing(covid);
        this.covid.add(covid);
    }

    spawnMask() {
        this.mask = new Mask(
            {
            scene: this,
            x: Phaser.Math.Between(0, this.scale.width),
            y: 0,
            sprite: 'mask',
          },
          250
        );
        this.add.existing(this.mask).setScale(0.1);
        this.physics.add.existing(this.mask);
        this.physics.add.overlap(this.player, this.mask, this.resetMask, null, this)
    }

    die() {
        this.endTime = new Date()
        this.score = this.endTime - this.startTime
        this.scene.start("game_over_scene", { score: this.score });
    }

    infection(player, covid) {
        covid.disableBody(true, true);
        player.playerHealth-=1;
        console.log("Player Health: " + player.playerHealth);
        if(player.playerHealth <= 0) {
            this.die();
        }
    }

    resetMask(player, mask) {
        mask.disableBody(true, true);
        player.playerMask = 100;
        // this.spawnMask();
        this.physics.add.overlap(this.player, this.mask, this.resetMask, null, this);
    }

    
}