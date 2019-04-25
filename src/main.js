import Phaser from 'phaser'

import { SCREEN_WIDTH, SCREEN_HEIGHT } from './utils/constants'
import MainScene from './scenes/main-scene'

const config = {
  type: Phaser.AUTO,
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  scale: {
    min: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT
    },
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  pixelArt: true, // set to false for non-pixel games
  zoom: 3, // set to 1 to keep original graphics size
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: [MainScene]
}

window.onload = () => {
  // eslint-disable-next-line no-new
  new Phaser.Game(config)
}
