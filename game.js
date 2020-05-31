var config = {
    width : 640,
    height : 544,
    backgroundColor : 0x252525,
    scene : [PreloadScene, MainScene],
    parent: "game",
    physics: {
        default: "arcade",
        arcade:{
            debug: false
        }
    }
};
var game = new Phaser.Game(config);