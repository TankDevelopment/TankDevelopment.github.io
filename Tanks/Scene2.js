class Scene2 extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    create() {
        this.anims.create({
            key: "PlayerTankAnim1",
            frames: this.anims.generateFrameNumbers("PlayerTank"),
            frameRate: 8,
            repeat: 1
        });
        this.anims.create({
            key: "PlayerTankAnim2",
            frames: this.anims.generateFrameNumbers("PlayerTank"),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: "EnemyTankAnim",
            frames: this.anims.generateFrameNumbers("EnemyTank1"),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: "FastEnemyTankAnim",
            frames: this.anims.generateFrameNumbers("EnemyTank2"),
            frameRate: 10,
            repeat: -1
        });
        
        this.PlayerProjectiles = this.physics.add.group();
        this.EnemyProjectiles = this.physics.add.group();
        this.EnemyTanks = this.physics.add.group();
        this.Walls = this.physics.add.group();
        
        this.PlayerTank = this.physics.add.sprite(320, game.config.height - 16, "PlayerTank", 0);
        this.PlayerTank.Tick = 1;
        this.PlayerTank.setCollideWorldBounds(true);
        this.PlayerTank.Facing = "up";
        this.PlayerTank.setScale(0.85);
        this.PlayerTank.ProjectileLimit = 1;
        this.PlayerTank.Speed = 2;
        this.PlayerTank.Destroyed = false;
        this.PlayerTank.Moving = false;
        this.PlayerLives = 3;
        this.TankSpawnTime = 300;
        this.EnemyTankCount = 20;
        this.ArrowKeys = this.input.keyboard.createCursorKeys();
        this.SpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        var tableTest = [[2,4,"Brick"],[2,5,"Brick"],[2,6,"Brick"],[2,7,"Brick"],[2,8,"Brick"],[2,9,"Brick"],[2,10,"Brick"],[2,11,"Brick"],[2,12,"Brick"],[2,13,"Brick"],[2,14,"Brick"],[2,15,"Brick"],[3,4,"Brick"],[3,5,"Brick"],[3,6,"Brick"],[3,7,"Brick"],[3,8,"Brick"],[3,9,"Brick"],[3,10,"Brick"],[3,11,"Brick"],[3,12,"Brick"],[3,13,"Brick"],[3,14,"Brick"],[3,15,"Brick"],[36,4,"Brick"],[36,5,"Brick"],[36,6,"Brick"],[36,7,"Brick"],[36,8,"Brick"],[36,9,"Brick"],[36,10,"Brick"],[36,11,"Brick"],[36,12,"Brick"],[36,13,"Brick"],[36,14,"Brick"],[36,15,"Brick"],[37,4,"Brick"],[37,5,"Brick"],[37,6,"Brick"],[37,7,"Brick"],[37,8,"Brick"],[37,9,"Brick"],[37,10,"Brick"],[37,11,"Brick"],[37,12,"Brick"],[37,13,"Brick"],[37,14,"Brick"],[37,15,"Brick"],[9,4,"Brick"],[10,4,"Brick"],[11,4,"Brick"],[12,4,"Brick"],[13,4,"Brick"],[14,4,"Brick"],[15,4,"Brick"],[16,4,"Brick"],[17,4,"Brick"],[18,4,"Brick"],[21,4,"Brick"],[22,4,"Brick"],[23,4,"Brick"],[24,4,"Brick"],[25,4,"Brick"],[26,4,"Brick"],[27,4,"Brick"],[28,4,"Brick"],[29,4,"Brick"],[30,4,"Brick"],[9,5,"Brick"],[10,5,"Brick"],[11,5,"Brick"],[12,5,"Brick"],[13,5,"Brick"],[14,5,"Brick"],[15,5,"Brick"],[16,5,"Brick"],[17,5,"Brick"],[18,5,"Brick"],[21,5,"Brick"],[22,5,"Brick"],[23,5,"Brick"],[24,5,"Brick"],[25,5,"Brick"],[26,5,"Brick"],[27,5,"Brick"],[28,5,"Brick"],[29,5,"Brick"],[30,5,"Brick"],[2,22,"Brick"],[2,23,"Brick"],[2,24,"Brick"],[2,25,"Brick"],[2,26,"Brick"],[2,27,"Brick"],[2,28,"Brick"],[2,29,"Brick"],[2,30,"Brick"],[2,31,"Brick"],[3,22,"Brick"],[3,23,"Brick"],[3,24,"Brick"],[3,25,"Brick"],[3,26,"Brick"],[3,27,"Brick"],[3,28,"Brick"],[3,29,"Brick"],[3,30,"Brick"],[3,31,"Brick"],[36,22,"Brick"],[36,23,"Brick"],[36,24,"Brick"],[36,25,"Brick"],[36,26,"Brick"],[36,27,"Brick"],[36,28,"Brick"],[36,29,"Brick"],[36,30,"Brick"],[36,31,"Brick"],[37,22,"Brick"],[37,23,"Brick"],[37,24,"Brick"],[37,25,"Brick"],[37,26,"Brick"],[37,27,"Brick"],[37,28,"Brick"],[37,29,"Brick"],[37,30,"Brick"],[37,31,"Brick"],[15,19,"Brick"],[16,19,"Brick"],[17,19,"Brick"],[18,19,"Brick"],[19,19,"Metal"],[20,19,"Metal"],[21,19,"Brick"],[22,19,"Brick"],[23,19,"Brick"],[24,19,"Brick"],[15,20,"Brick"],[16,20,"Brick"],[17,20,"Brick"],[18,20,"Brick"],[19,20,"Metal"],[20,20,"Metal"],[21,20,"Brick"],[22,20,"Brick"],[23,20,"Brick"],[24,20,"Brick"],[9,8,"Brick"],[9,9,"Brick"],[9,10,"Brick"],[9,11,"Brick"],[9,12,"Brick"],[9,13,"Brick"],[9,14,"Brick"],[9,15,"Brick"],[9,16,"Brick"],[9,17,"Brick"],[9,18,"Brick"],[9,19,"Brick"],[9,20,"Brick"],[9,21,"Brick"],[9,22,"Brick"],[9,23,"Brick"],[9,24,"Brick"],[9,25,"Brick"],[9,26,"Brick"],[9,27,"Brick"],[10,8,"Brick"],[10,9,"Brick"],[10,10,"Brick"],[10,11,"Brick"],[10,12,"Brick"],[10,13,"Brick"],[10,14,"Brick"],[10,15,"Brick"],[10,16,"Brick"],[10,17,"Brick"],[10,18,"Brick"],[10,19,"Brick"],[10,20,"Brick"],[10,21,"Brick"],[10,22,"Brick"],[10,23,"Brick"],[10,24,"Brick"],[10,25,"Brick"],[10,26,"Brick"],[10,27,"Brick"],[29,8,"Brick"],[29,9,"Brick"],[29,10,"Brick"],[29,11,"Brick"],[29,12,"Brick"],[29,13,"Brick"],[29,14,"Brick"],[29,15,"Brick"],[29,16,"Brick"],[29,17,"Brick"],[29,18,"Brick"],[29,19,"Brick"],[29,20,"Brick"],[29,21,"Brick"],[29,22,"Brick"],[29,23,"Brick"],[29,24,"Brick"],[29,25,"Brick"],[29,26,"Brick"],[29,27,"Brick"],[30,8,"Brick"],[30,9,"Brick"],[30,10,"Brick"],[30,11,"Brick"],[30,12,"Brick"],[30,13,"Brick"],[30,14,"Brick"],[30,15,"Brick"],[30,16,"Brick"],[30,17,"Brick"],[30,18,"Brick"],[30,19,"Brick"],[30,20,"Brick"],[30,21,"Brick"],[30,22,"Brick"],[30,23,"Brick"],[30,24,"Brick"],[30,25,"Brick"],[30,26,"Brick"],[30,27,"Brick"]];
        for (var i = 0; i < tableTest.length; i++) {
            var tableTest2 = tableTest[i];
            this.createWall(tableTest2[0], tableTest2[1], tableTest2[2]);
        }
        this.physics.add.overlap(this.PlayerProjectiles, this.EnemyProjectiles, this.destroyProjectiles, null, this);
        this.physics.add.overlap(this.PlayerTank, this.EnemyProjectiles, this.destroyPlayerTank, null, this);
        this.physics.add.overlap(this.EnemyTanks, this.PlayerProjectiles, this.destroyEnemyTank, null, this);
        this.physics.add.overlap(this.PlayerProjectiles, this.Walls, this.destroyProjectiles2, null, this);
        this.physics.add.overlap(this.EnemyProjectiles, this.Walls, this.destroyProjectiles2, null, this);
        this.physics.add.overlap(this.PlayerTank, this.Walls, this.wallCollide, null, this);
        this.physics.add.overlap(this.EnemyTanks, this.Walls, this.wallCollide, null, this);
    }
    update() {
        if(this.PlayerTank.Destroyed == false) {
            this.PlayerTankMovement();
            this.PlayerTankShoot();
        }
        for(var i = 0; i < this.PlayerProjectiles.getChildren().length; i++){
            var PlayerProjectile = this.PlayerProjectiles.getChildren()[i];
            PlayerProjectile.update();
        }
        for(var i = 0; i < this.EnemyProjectiles.getChildren().length; i++){
            var EnemyProjectile = this.EnemyProjectiles.getChildren()[i];
            EnemyProjectile.update();
        }
        for(var i = 0; i < this.EnemyTanks.getChildren().length; i++){
            var EnemyTank = this.EnemyTanks.getChildren()[i];
            EnemyTank.update();
        }
        if(this.EnemyTanks.getChildren().length < 4){
            if(this.EnemyTanks.getChildren().length < 2){
                this.TankSpawnTime -= 2;
            } else {
                this.TankSpawnTime -= 1;
            }
            if(this.TankSpawnTime <= 0 & this.EnemyTankCount > 0) {
                this.createEnemyTank();
                this.TankSpawnTime = Phaser.Math.Between(300, 500);
                this.EnemyTankCount -= 1;
                console.log(this.EnemyTankCount);
            }
        }
    }
    PlayerTankMovement() {
        if(this.ArrowKeys.left.isDown) {
            this.PlayerTank.setAngle(-90);
            this.PlayerTank.Moving = true;
            this.PlayerTank.Facing = "left";
        } else {if(this.ArrowKeys.right.isDown) {
            this.PlayerTank.setAngle(90);
            this.PlayerTank.Moving = true;
            this.PlayerTank.Facing = "right";
        } else {if(this.ArrowKeys.down.isDown) {
            this.PlayerTank.setAngle(180);
            this.PlayerTank.Moving = true;
            this.PlayerTank.Facing = "down";
        } else {if(this.ArrowKeys.up.isDown) {
            this.PlayerTank.setAngle(0);
            this.PlayerTank.Moving = true;
            this.PlayerTank.Facing = "up";
        }}}}
        if(this.ArrowKeys.left.justDown || this.ArrowKeys.right.justDown || this.ArrowKeys.down.justDown || this.ArrowKeys.up.justDown) {
            this.PlayerTank.play("PlayerTankAnim1");
        }
        if(!(this.ArrowKeys.left.isDown || this.ArrowKeys.right.isDown || this.ArrowKeys.down.isDown || this.ArrowKeys.up.isDown)) {
            this.PlayerTank.play("PlayerTankAnim2");
        }
        if(this.PlayerTank.Moving == true){
            if(this.PlayerTank.Facing == "left"){
                this.PlayerTank.x -= this.PlayerTank.Speed;
                //while(this.PlayerTank.x != Math.round(this.PlayerTank.x / 16) * 16 + 8) {
                //     this.PlayerTank.x -= this.PlayerTank.Speed; 
                //}
                this.PlayerTank.Moving = false;
            } else {if(this.PlayerTank.Facing == "right"){
                this.PlayerTank.x += this.PlayerTank.Speed;
                //while(this.PlayerTank.x != Math.round(this.PlayerTank.x / 16) * 16 + 8) {
                //    this.PlayerTank.x += this.PlayerTank.Speed; 
                //}
                this.PlayerTank.Moving = false;
            } else {if(this.PlayerTank.Facing == "down"){
                this.PlayerTank.y += this.PlayerTank.Speed;
                //while(this.PlayerTank.y != Math.round(this.PlayerTank.y / 16) * 16 + 8) {
                //     this.PlayerTank.y += this.PlayerTank.Speed; 
                //}
                this.PlayerTank.Moving = false;
            } else {if(this.PlayerTank.Facing == "up"){
                this.PlayerTank.y -= this.PlayerTank.Speed;
                //while(this.PlayerTank.y != Math.round(this.PlayerTank.y / 16) * 16 + 8) {
                //     this.PlayerTank.y -= this.PlayerTank.Speed; 
                //}
                this.PlayerTank.Moving = false;
            }}}}
        }
    }
    PlayerTankShoot() {
        if (Phaser.Input.Keyboard.JustDown(this.SpaceKey) & this.PlayerTank.ProjectileLimit >= 1 & this.PlayerTank.Destroyed == false) {
            var PlayerProjectile = new Projectile(this, this.PlayerTank, "Player");
            this.PlayerTank.ProjectileLimit -= 1;
        }
    }
    createEnemyTank() {
        var xPos = (Phaser.Math.Between(1,18) * 32) + 32
        var enemyTank = new EnemyTank(this, xPos, 16);
    }
    createWall(x, y, Type){
        var xPos = (x * 16) + 8;
        var yPos = (y * 16) + 8;
        if(Type == "Brick"){
            var Wall = this.physics.add.sprite(xPos, yPos, "BrickWall");
        } else {
            var Wall = this.physics.add.sprite(xPos, yPos, "MetalWall");
        }
        this.Walls.add(Wall)
    }
    destroyProjectiles(Projectile1, Projectile2) {
        Projectile1.ParentTank.ProjectileLimit += 1;
        Projectile2.ParentTank.ProjectileLimit += 1;
        Projectile1.destroy();
        Projectile2.destroy();
    }
    destroyProjectiles2(Projectile1, Wall) {
        Projectile1.ParentTank.ProjectileLimit += 1;
        Projectile1.destroy();
        Wall.setVelocityX(0);
        Wall.setVelocityY(0);
    }
    destroyPlayerTank(Tank, Projectile){
        Tank.disableBody(true,false);
        Tank.Destroyed = true;
        Tank.alpha = 0;
        Projectile.ParentTank.ProjectileLimit += 1;
        Projectile.destroy();
        var scene = this;
        this.PlayerLives -= 1;
        if(this.PlayerLives <= 0){
            setTimeout(this.gameOver, 3000);
        } else {
            Tank.x = 320;
            Tank.y = game.config.height - 16;
            Tank.setAngle(0);
            setTimeout(function(){
                var tween2 = scene.tweens.add({
                targets: Tank,
                ease: 'Power1',
                alpha: 1,
                duration: 2000,
                repeat: 0,
                onComplete: function(){
                    Tank.enableBody(true, 320, game.config.height - 16, true, true);
                    Tank.Facing = "up";
                    Tank.Destroyed = false;
                },
                callbackScope: this
                })
            }, 1000);
        }
    }
    destroyEnemyTank(Tank, Projectile){
        Tank.destroy();
        Projectile.ParentTank.ProjectileLimit += 1,
        Projectile.destroy();
    }
    wallCollide(Tank, Wall) {
        if(Tank.Facing == "left") {
            Tank.x += Tank.Speed;
            Tank.Moving = false;
        }
        if(Tank.Facing == "right") {
            Tank.x -= Tank.Speed;
            Tank.Moving = false;
        }
        if(Tank.Facing == "up") {
            Tank.y += Tank.Speed;
            Tank.Moving = false;
        }
        if(Tank.Facing == "down") {
            Tank.y -= Tank.Speed;
            Tank.Moving = false;
        }
        Tank.Tick -= 3;
    }
    gameOver() {
        var scene = this;
        this.gameOverText = scene.add.text(270, 250, "GAME OVER");
        var tween = scene.tweens.add({
        targets: this.PlayerTank,
        ease: 'Power1',
        alpha: 1,
        duration: 5000,
        repeat: 0,
        onComplete: function(){
            for(var i = 0; i < this.EnemyTanks.getChildren().length; i++){
                var EnemyTank = this.EnemyTanks.getChildren()[i];
                EnemyTank.destroy();
            }
            for(var i = 0; i < this.EnemyProjectiles.getChildren().length; i++){
                var EnemyProj = this.EnemyProjectiles.getChildren()[i];
                EnemyProj.destroy();
            }
            for(var i = 0; i < this.PlayerProjectiles.getChildren().length; i++){
                var PlayerProj = this.PlayerProjectiles.getChildren()[i];
                PlayerProj.destroy();
            }
            for(var i = 0; i < this.Walls.getChildren().length; i++){
                var Wall = this.Walls.getChildren()[i];
                Wall.destroy();
            }
            this.gameOverText.destroy();
            this.scene.start("BootGame");
        },
        callbackScope: this
        })
    }
}