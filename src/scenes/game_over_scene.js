class title_screen_scene extends Phaser.Scene {
    constructor() {
      super('game_over_scene');
    }

    init() {}

    preload() {}
    
    create() {
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
            .on('pointerover', () => this.buttonHoverState())
            .on('pointerout', () => this.buttonRestState())
            .on('pointerdown', () => this.buttonActiveState())
            .on('pointerup', () => {
                location.href = "./index.html"
            })
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
}