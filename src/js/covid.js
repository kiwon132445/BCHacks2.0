class Covid extends Phaser.Physics.Arcade.Sprite {
    constructor(config, speed) {
        super(config.scene, config.x, config.y, config.sprite);

        this.scene = config.scene;
        this.speed = speed;
        this.xVeloctiy = Phaser.Math.Between(-50, 50);
    }

    fallingCovid() {
        this.setVelocityY(this.speed);
        this.setVelocityX(this.xVeloctiy)
        if (this.y > this.scene.scale.height) {
            this.scene.counter+=1;
            this.resetCovid();
        }
    }

    //why reset and not remove?
    resetCovid() {
        this.y = 0
        this.x = Phaser.Math.Between(0, this.scene.scale.width);
        this.speed = Phaser.Math.Between(200, 500);
        this.xVeloctiy = Phaser.Math.Between(-50, 50);
    }
}