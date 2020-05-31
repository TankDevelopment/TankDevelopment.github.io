class Scene1 extends Phaser.Scene {
    constructor() {
        super("BootGame");
    }
    preload() {
        this.load.spritesheet("PlayerTank", "assets/spritesheets/PlayerTank.png", {
            frameWidth: 32, frameHeight: 32
        });
        this.load.spritesheet("EnemyTank1", "assets/spritesheets/EnemyTank.png", {
            frameWidth: 32, frameHeight: 32
        });
        this.load.spritesheet("EnemyTank2", "assets/spritesheets/FastEnemyTank.png", {
            frameWidth: 32, frameHeight: 32
        });
        this.load.image("Projectile", "assets/images/Projectile.png");
        this.load.image("BrickWall", "assets/images/BrickWall.png");
        this.load.image("MetalWall", "assets/images/MetalWall.png");
    }
    create() {
        this.text1 = this.add.text(270, 240, "TANK GAME");
        this.text2 = this.add.text(220, 260, "Press SPACE to start");
        this.text3 = this.add.text(25, 520, "NOTE: The game is in alpha and is subjecting to change. A LOT.");
        this.SpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.GameStarted = false;
    }
    update() {
        if (this.GameStarted == false & Phaser.Input.Keyboard.JustDown(this.SpaceKey)) {
            this.scene.start("PlayGame");
            this.GameStarted = true;
            this.text1.destroy();
            this.text2.destroy();
            this.text3.destroy();
        }
    }
}