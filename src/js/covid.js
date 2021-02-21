class Covid extends Phaser.Physics.Arcade.Sprite {
    constructor(config, speed) {
        super(config.scene, config.x, config.y, config.sprite);

        this.speed = speed;
    }
    
}