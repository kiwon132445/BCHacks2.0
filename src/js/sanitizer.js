class Sanitizer extends Phaser.Physics.Arcade.Sprite {
    constructor(config, speed) {
        super(config.scene, config.x, config.y, config.sprite);

        this.scene = config.scene;
        this.speed = speed;
    }

    fallingSanitizer() {
        this.setVelocityY(this.speed);
        if (this.y > this.scene.scale.height) {
            this.destroy();
        }
    }

    destroy() {
        this.disableBody(true, true);
    }
}