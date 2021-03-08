import React, { useState } from 'react'
import Slider from './slider'

export default function Face () {
  const [state, setState] = useState({
    noseWidth: { value: 0.5, valueName: 'noseWidth', title: 'Ширина носа' },
    noseHeight: { value: 0.5, valueName: 'noseHeight', title: 'Высота носа' },
    noseTipLength: {
      value: 0.5,
      valueName: 'noseTipLength',
      title: 'Длина кончика носа'
    },
    depthOfTheBridgeOfTheNose: {
      value: 0.5,
      valueName: 'depthOfTheBridgeOfTheNose',
      title: 'Глубина моста носа'
    },
    brokenNose: {
      value: 0.5,
      valueName: 'brokenNose',
      title: 'Поломоность носа'
    },
    eyebrowHeight: {
      value: 0.5,
      valueName: 'eyebrowHeight',
      title: 'Высота бровей'
    },
    heightOfCheekbones: {
      value: 0.5,
      valueName: 'heightOfCheekbones',
      title: 'Высота скул'
    },
    cheekboneWidth: {
      value: 0.5,
      valueName: 'cheekboneWidth',
      title: 'Ширина скул'
    },
    cheekDepth: { value: 0.5, valueName: 'cheekDepth', title: 'Глубина щеки' },
    eyeSize: { value: 0.5, valueName: 'eyeSize', title: 'Размер глаз' },
    lipThickness: {
      value: 0.5,
      valueName: 'lipThickness',
      title: 'Толщина губ'
    },
    jawWidth: { value: 0.5, valueName: 'jawWidth', title: 'Ширина челюсти' },
    jawShape: { value: 0.5, valueName: 'jawShape', title: 'Форма челюсти' },
    chinHeight: {
      value: 0.5,
      valueName: 'chinHeight',
      title: 'Высота подбородка'
    },
    chinDepth: {
      value: 0.5,
      valueName: 'chinDepth',
      title: 'Глубина подбородка'
    },
    chinIndent: {
      value: 0.5,
      valueName: 'chinIndent',
      title: 'Отступ подборода'
    }
  })

  const onValueChange = (value, valueName) => {
    const newState = JSON.parse(JSON.stringify(state))
    value = (value ^ 0) === value ? value : Number(value.toFixed(2))
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

  return (
    <div className='face current-block'>
      <div className='current-wrap skroll'>{sliderList}</div>
    </div>
  )
}
