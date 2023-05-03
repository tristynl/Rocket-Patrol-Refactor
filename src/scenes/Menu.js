class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //Load images
        this.load.image('menuColor', './assets/menuColor.png');
        this.load.image('bobaone', './assets/boba1.png');
        //this.load.image('bobatwo', './assets/boba2.png');
        //Load audio
        this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/assets_explosion38.wav');
        this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
        //Background Music
        this.load.audio('music', './assets/relaxingmusic.mp3');
        //4 Random Audio
        this.load.audio('one', './assets/audio1.mp3');
        this.load.audio('two', './assets/audio2.mp3');
        this.load.audio('three', './assets/audio3.mp3');
        this.load.audio('four', './assets/audio4.mp3');
    }

    create() {

        this.add.image(0,0, 'menuColor').setOrigin(0,0);
        this.add.image(0,0, 'bobaone').setOrigin(0,0);
        //this.add.image(0,0, 'bobatwo').setOrigin(10, 10);
        
        //Menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141', //
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        //Show menu text
        const text1 = this.add.text(60, 100, 'Rocket Patrol', {
          fontFamily: 'Courier',
          fontSize: '64px',
          color: 'pink',
          padding: {
            left: 5,
            right: 5
          }
        });

        const text2 = this.add.text(130, 180, 'Use ←→ arrows to \nmove & (F) to fire', {
          fontFamily: 'Courier',
          fontSize: '32px',
          color: 'purple',
          padding: {
            left: 5,
            right: 5
          }
        });
        
        const text3 = this.add.text(130, 260, 'Press ← for Novice \nor → for Expert', {
          fontFamily: 'Courier',
          fontSize: '32px',
          color: 'pink',
          padding: {
            left: 5,
            right: 5
          }
        });
        
        const text4 = this.add.text(80, 340, 'Straw: 30 points \nMilk Tea Liquid: 20 points \nPearls: 10 points \nYellow Pudding: 50points', {
          fontFamily: 'Courier',
          fontSize: '32px',
          color: 'purple',
          padding: {
            left: 5,
            right: 5
          }
        });

        menuConfig.backgroundColor = '#00FF00'; //
        menuConfig.color = '#000';

        //Define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          //Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          //Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
}