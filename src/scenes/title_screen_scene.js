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

        this.add
        .text(screenCenterX, screenCenterY , 'Play', {
            font: '50px Ariel',
            fill: 'blue',
        })
        .setOrigin(0.5); 
    }

    update(){
    }
}