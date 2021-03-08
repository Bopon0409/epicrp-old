import React, { useState } from 'react'
import Slider from './slider'

export default function Face () {
  const [state, setState] = useState({
    noseWidth: { value: 50, valueName: 'noseWidth', title: 'Ширина носа' },
    noseHeight: { value: 50, valueName: 'noseHeight', title: 'Высота носа' },
    noseTipLength: {
      value: 50,
      valueName: 'noseTipLength',
      title: 'Длина кончика носа'
    },
    depthOfTheBridgeOfTheNose: {
      value: 50,
      valueName: 'depthOfTheBridgeOfTheNose',
      title: 'Глубина моста носа'
    },
    brokenNose: {
      value: 50,
      valueName: 'brokenNose',
      title: 'Поломоность носа'
    },
    eyebrowHeight: {
      value: 50,
      valueName: 'eyebrowHeight',
      title: 'Высота бровей'
    },
    heightOfCheekbones: {
      value: 50,
      valueName: 'heightOfCheekbones',
      title: 'Высота скул'
    },
    cheekboneWidth: {
      value: 50,
      valueName: 'cheekboneWidth',
      title: 'Ширина скул'
    },
    cheekDepth: { value: 50, valueName: 'cheekDepth', title: 'Глубина щеки' },
    eyeSize: { value: 50, valueName: 'eyeSize', title: 'Размер глаз' },
    lipThickness: {
      value: 50,
      valueName: 'lipThickness',
      title: 'Толщина губ'
    },
    jawWidth: { value: 50, valueName: 'jawWidth', title: 'Ширина челюсти' },
    jawShape: { value: 50, valueName: 'jawShape', title: 'Форма челюсти' },
    chinHeight: {
      value: 50,
      valueName: 'chinHeight',
      title: 'Высота подбородка'
    },
    chinDepth: {
      value: 50,
      valueName: 'chinDepth',
      title: 'Глубина подбородка'
    },
    chinIndent: {
      value: 50,
      valueName: 'chinIndent',
      title: ' Отступ подборода'
    }
  })

  const onValueChange = (value, valueName) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState[valueName].value = value
    setState(newState)
  }

  const sliderList = []
  for (const item in state) {
    sliderList.push(
      <Slider
        key={state[item].valueName}
        item={state[item]}
        onValueChange={onValueChange}
      />
    )
  }

  return <div className='face skroll current-block'>{sliderList}</div>
}
