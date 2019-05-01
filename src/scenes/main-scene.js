import Phaser from 'phaser'

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants'

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' })
  }

  create() {
    // setup the game world
    this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 'character')
  }

  update() {
    // update the game world
  }
}

export default MainScene
