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

        this.startButton = new TextButton(
            this,
            screenCenterX,
            screenCenterY,
            'play',
            { font: '40px Ariel', fill: 'blue' },
            () => this.scene.start('gameplay_scene'));
    }

    update(){
    }
}