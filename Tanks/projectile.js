class Projectile extends Phaser.GameObjects.Sprite{
    
    constructor(Scene,Tank,Type){
        var x = Tank.x;
        var y = Tank.y;
        super(Scene, x, y, "Projectile");
        Scene.add.existing(this);
        if (Type == "Player") {
            Scene.PlayerProjectiles.add(this);
        } else {
            Scene.EnemyProjectiles.add(this);
        }
        Scene.physics.world.enableBody(this);
        this.setScale(0.85);
        if (Tank.Facing == "up") {
            this.body.velocity.y = -200;
            this.setAngle(0);
        } else {if (Tank.Facing == "left") {
            this.body.velocity.x = -200;
            this.setAngle(-90);
        } else {if (Tank.Facing == "right") {
            this.body.velocity.x = 200;
            this.setAngle(90);
        } else {if (Tank.Facing == "down") {
            this.body.velocity.y = 200;
            this.setAngle(180);
        }}}}
        this.ParentTank = Tank;
    }
    
    update(){
        if (this.x > game.config.width - 8 | this.x < 8) {
            this.destroy();
            this.ParentTank.ProjectileLimit += 1;
        }
        if (this.y > game.config.height - 8 | this.y < 8) {
            this.destroy();
            this.ParentTank.ProjectileLimit += 1;
        }
    }
}