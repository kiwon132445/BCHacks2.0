class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config, speed, covid) {
        super(config.scene, config.x, config.y, config.sprite);
        
        this.speed = speed;
        this.covid = covid;
        
        this.key = this.scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
          });
        
    }

    player_controls() {
        if (this.key.up.isDown) {
            this.setVelocityY(-this.speed);
          } else if (this.key.down.isDown) {
            this.setVelocityY(this.speed);
          } else {
            this.setVelocityY(0);
          }
          if (this.key.left.isDown && !this.movementDisabled) {
            this.setVelocityX(-this.speed);
            this.flipX = false;
          } else if (this.key.right.isDown && !this.movementDisabled) {
            this.setVelocityX(this.speed);
            this.flipX = true;
          } else {
            this.setVelocityX(0);
          }
    }

}