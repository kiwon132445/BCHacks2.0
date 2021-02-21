class HealthBar {

    constructor (scene, x, y, player)
    {
        this.bar = new Phaser.GameObjects.Graphics(scene);

        this.x = x;
        this.y = y;
        this.player = player;
        this.value = 500;

        this.draw();

        scene.add.existing(this.bar);
    }

    draw ()
    {
        this.bar.clear();

        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, 510, 80);

        //  Health

        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + 5, this.y + 5, 500, 70);

        this.bar.fillStyle(0x00ff00);

        let d = Math.floor(this.player.playerHealth / 3 * this.value);
        this.bar.fillRect(this.x + 5, this.y + 5, d, 70);
    }

}