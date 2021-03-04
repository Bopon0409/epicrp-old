import React, { Component } from 'react'
import Slider from './slider'

export default class Face extends Component {
  state = {
    face: {
      noseWidth: 50,
      noseHeight: 50,
      noseTipLength: 50,
      depthOfTheBridgeOfTheNose: 50,
      brokenNose: 50,
      eyebrowHeight: 50,
      heightOfCheekbones: 50,
      cheekboneWidth: 50,
      cheekDepth: 50,
      eyeSize: 50,
      lipThickness: 50,
      jawWidth: 50,
      jawShape: 50,
      chinHeight: 50,
      chinDepth: 50,
      chinIndent: 50
    },
    leather: {
      stains: 1,
      age: 1,
      sunDamage: 1,
      freckles: 1,
      color: 50
    },
    eyes: { type: 1, color: 1 },
    hair: { beard: 0, colorBeard: 0, hairstyle: 0, colorHairstyle: 0 },
    clothes: {
      shirt: 1,
      colorShirt: 1,
      pants: 1,
      colorPaints: 1,
      shoes: 1,
      colorShoes: 1
    }
  }

  render () {
    return (
      <div className='face'>
        <Slider />
      </div>
    )
  }
}
