class title_screen_scene extends Phaser.Scene {
    constructor() {
      super('title_screen_scene');
    }

    init() {
    }

    preload() {
    }

    create() {  
        const screenX = this.cameras.main.width;
        const screenY = this.cameras.main.height;
        const screenCenterX = this.cameras.main.worldView.x + screenX / 2;
        const screenCenterY = this.cameras.main.worldView.y + screenY / 2;

<<<<<<< Updated upstream
        this.startButton = new TextButton(
            this,
            screenCenterX,
            screenCenterY,
            'play',
            { font: '40px Ariel', fill: 'blue' },
            () => this.scene.start('gameplay_scene'));
=======
        this.playButton = this.add.text(screenCenterX - 45, screenCenterY, 'Play', {font: '45px Ariel', fill: 'white'})
            .setInteractive()
            .on('pointerover', () => this.buttonHoverState())
            .on('pointerout', () => this.buttonRestState())
            .on('pointerdown', () => this.buttonActiveState())
            .on('pointerup', () => {
                this.scene.start('gameplay_scene')
            })
>>>>>>> Stashed changes
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
        
    update(){
    }
}