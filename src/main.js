/***************************************************************************
* Tristyn Lai
* Mod Title: Boba Time!
* Time: 20 hours
* (5) Create a new scrolling tile sprite for the background
* (5) Implement the speed increase that happens after 30 seconds in the original game 
* (5) Add your own (copyright-free) background music to the Play scene
* (10) Create a new title screen (e.g., new artwork, typography, layout) (I also made the boba cup art myself)
* (10) Using a texture atlas, create a new animated sprite for the Spaceship enemies 
* (15) Create a new enemy Spaceship type (w/ new artwork) that’s smaller, moves faster, and is worth more points (It's a yellow pudding that has a face on it)
* (10) Create 4 new explosion sound effects and randomize which one plays on impact 
* (15) Use Phaser’s particle emitter to create a particle explosion when the rocket hits the spaceship
* (15) Implement mouse control for player movement and mouse click to fire 
* (15) Custom - God Tier: Asset replacement for the game objects (Made artwork for milk tea liquid, pearls, straw, boba cup)
* Citations: https://pixabay.com/sound-effects/ (This is where I got the background music and 4 explosion effects)
**************************************************************************/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
//let highscore = 0;

//Set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Reserve keyboard variables
let keyF, keyM, keyR, keyLEFT, keyRIGHT;

let mouse;