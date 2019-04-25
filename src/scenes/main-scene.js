import Phaser from 'phaser'

class MainScene extends Phaser.Scene {
  constructor () {
    super({ key: 'main' })
  }

  preload () {
    // load assets here
  }

  create () {
    // setup the game world
    this.add.text(128, 64, 'Hello, phaser!').setOrigin(0.5)
  }

  update () {
    // update the game world
  }
}

export default MainScene
