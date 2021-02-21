class Mask extends Phaser.Physics.Arcade.Sprite {
    constructor(config, speed) {
        super(config.scene, config.x, config.y, config.sprite);

        this.scene = config.scene;
        this.speed = speed;


    }

    fallingMask() {
        this.setVelocityY(this.speed);
        if (this.y > this.scene.scale.height) {
            this.resetMask();
        }
    }

    resetMask() {
        this.y = 0
        this.x = Phaser.Math.Between(0, this.scene.scale.width);
        this.speed = 250
    }
}