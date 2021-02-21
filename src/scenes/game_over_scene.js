class game_over_scene extends Phaser.Scene {
    constructor() {
      super('game_over_scene');
    }

    init() {}

    preload() {
        this.load.image('background', '../../assets/gameover-screen.jpg');
    }
    
    create() {
        const screenX = this.cameras.main.width;
        const screenY = this.cameras.main.height;
        const screenCenterX = this.cameras.main.worldView.x + screenX / 2;
        const screenCenterY = this.cameras.main.worldView.y + screenY / 2;

        this.add.image(0, 0, 'background').setOrigin(0).setScale(0.8);

        this.add
        .text(screenCenterX, screenCenterY - 100, 'Game Over', {
            font: '50px Ariel',
            fill: 'red',
        })
        .setOrigin(0.5); 

        this.playButton = this.add.text(screenCenterX, screenCenterY, 'Go Back', {font: '45px Ariel', fill: 'white', fontStyle: 'bold italic'})
            .setInteractive()
            .on('pointerover', () => this.buttonHoverState())
            .on('pointerout', () => this.buttonRestState())
            .on('pointerdown', () => this.buttonActiveState())
            .on('pointerup', () => {
                location.href = "/"
            }).setOrigin(0.5); 
      
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
    update(){}
}