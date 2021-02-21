class Covid extends Phaser.Physics.Arcade.Sprite {
    constructor(config, speed) {
        super(config.scene, config.x, config.y, config.sprite);

        this.scene = config.scene;
        this.speed = speed;
    }

    fallingCovid() {
        this.setVelocityY(this.speed);
        if (this.y > this.scene.scale.height) {
            this.scene.counter+=1;
            this.resetCovid();
        }
    }

    resetCovid() {
        this.y = 0
        this.x = Phaser.Math.Between(0, this.scene.scale.width);
        this.speed = Phaser.Math.Between(100, 500);
    }
}