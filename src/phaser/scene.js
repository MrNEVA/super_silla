import Phaser from "phaser";
import desk from "../assets/super_silla.png";
import fondo from "../assets/noche.png"
import papel from ".../assets/Papel.png"

let cursors
let silla
class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
    
  }
  preload() {
   // this.load.image("silla", desk)
    this.load.image("noche", fondo);
    this.load.spritesheet('silla', 
        desk,
        { frameWidth: 192, frameHeight: 192 }
    );
  }
  create() {
    const noche = this.add.image(0, 0, 'noche').setOrigin(0).setScale(1);
    const papel = this.add.image(200, 568, 'papel').setOrign(0).setScale(1);
    silla = this.physics.add.sprite(400, 450, 'silla');
   
    silla.setBounce(0.8);
    silla.setCollideWorldBounds(true);


this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('silla', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});
    cursors = this.input.keyboard.createCursorKeys();
this.anims.create({
    key: 'turn',
    frames: [ { key: 'silla', frame: 0 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('silla', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});
  }
  update(){  
  if (cursors.left.isDown)
        {
            silla.setVelocityX(-160);

            silla.anims.play('left', true);
        }    
        else if (cursors.right.isDown)
        {
            silla.setVelocityX(160);

            silla.anims.play('right', true);
        }
        else
        {
            silla.setVelocityX(0);

            silla.anims.play('turn');
        }

        if (cursors.up.isDown && silla.body.touching.down)
        {
            silla.setVelocityY(-330);
        }
  }
}

export default playGame;
