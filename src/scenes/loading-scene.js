import Phaser from 'phaser'

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants'

// asset paths for loading scren
import IMG_LOADINGBAR from '../assets/images/loading-bar.png'

// asset paths for the game
import IMG_CHARACTER from '../assets/images/character.png'

class LoaderScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'loader',
      pack: {
        files: [{ type: 'image', key: 'img:loading-bar', url: IMG_LOADINGBAR }]
      }
    })
  }

  preload() {
    this._createLoadingBar()

    // load images and spritesheets
    this.load.image('character', IMG_CHARACTER)
  }

  create() {
    // loading has finished -> start game
    this.scene.start('main')
  }

  _createLoadingBar() {
    // make bar graphics
    this.add
      .image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 'img:loading-bar')
      .setAlpha(0.2)
    const bar = this.add
      .image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 'img:loading-bar')
      .setCrop(0, 0, 0, 0)

    // update the bar length according to loading progress
    this.load.on('progress', progress => {
      bar.setCrop(0, 0, bar.width * progress, bar.height)
    })
  }
}

export default LoaderScene
