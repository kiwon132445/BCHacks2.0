class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config, speed) {
    super(config.scene, config.x, config.y, config.sprite);
    
    this.speed = speed;
    this.playerHealth = 3;
    
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
      if (this.key.left.isDown) {
        this.setVelocityX(-this.speed);
        this.flipX = false;
      } else if (this.key.right.isDown) {
        this.setVelocityX(this.speed);
        this.flipX = true;
      } else {
        this.setVelocityX(0);
      }

      if (
        this.key.down.isDown ||
        this.key.up.isDown ||
        this.key.left.isDown ||
        this.key.right.isDown
      ) {
        if (!this.isWalking) {
          this.playerWalkAnimStart();
        }
      } else {
        this.playerWalkAnimStop();
      }
  }
  
  playerWalkAnimStart() {
    if (!this.isWalking) {
      this.isWalking = true;
      this.play('WalkCycle');
    }
  }

  // Worked on by: Anna
  playerWalkAnimStop() {
    this.isWalking = false;
    if (this.anims) {
      this.anims.stop();
    } 
  }

}