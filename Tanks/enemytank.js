class EnemyTank extends Phaser.GameObjects.Sprite{
    
    constructor(Scene,x,y){
        super(Scene, x, y, "EnemyTank1");
        this.RandomVar = Scene;
        Scene.add.existing(this);
        this.setAngle(180);
        this.Facing = "down";
        this.ProjectileLimit = 1;
        this.Speed = 1.5;
        this.Moving = false;
        this.Enabled = false;
        this.setScale(0.85);
        this.alpha = 0;
        var tween = Scene.tweens.add({
        targets: this,
        ease: 'Power1',
        alpha: 1,
        duration: 2000,
        repeat: 0,
        onComplete: function(){
            Scene.EnemyTanks.add(this);
            Scene.physics.world.enableBody(this);
            this.Tick = Phaser.Math.Between(50,300);
            this.play("EnemyTankAnim");
            this.Enabled = true;
        },
        callbackScope: this
        })
    }

    update() {
        if(this.Enabled == true) {
            this.Tick -= 1;
            if(this.Tick <= 0) {
                var Variable = Phaser.Math.Between(0,3);
                if(Variable == 0) {
                    this.Facing = "left";
                } else {if(Variable == 1) {
                    this.Facing = "right";
                } else {if(Variable == 2) {
                    this.Facing = "up";
                } else {
                    this.Facing = "down";
                }}}
                this.Tick = Phaser.Math.Between(50,250);
            }
            if(Math.random() <= 0.01) {
                this.shootProjectile();
            }
            this.moveEnemyTank();
        }
    }
    
    moveEnemyTank() {
        if(this.Facing == "left") {
            this.setAngle(-90);
            this.x -= this.Speed;
            if(this.x <= 15) {
                this.x += this.Speed;
                this.Tick -= 3;
            }
        }
        if(this.Facing == "right") {
            this.setAngle(90);
            this.x += this.Speed;
            if(this.x >= game.config.width - 15) {
                this.x -= this.Speed;
                this.Tick -= 3;
            }
        }
        if(this.Facing == "down") {
            this.setAngle(180);
            this.y += this.Speed;
            if(this.y >= game.config.height - 15) {
                this.y -= this.Speed;
                this.Tick -= 3;
            }
        }
        if(this.Facing == "up") {
            this.setAngle(0);
            this.y -= this.Speed;
            if(this.y <= 15) {
                this.y += this.Speed;
                this.Tick -= 3;
            }
        }
    }
    
    shootProjectile() {
        if (this.ProjectileLimit >= 1) {
            var EnemyProjectile = new Projectile(this.RandomVar, this, "Enemy");
            this.ProjectileLimit -= 1;
        }
    }
}