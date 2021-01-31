import React from 'react'
import InputRange from 'react-input-range'

import 'react-input-range/lib/css/index.css'

export default class Slider extends React.Component {
  onChange = range => {
    this.props.onChange(range)
  }
  render () {
    const { value, quantity } = this.props
    return (
      <div className='slider'>
        <label className='title label'>Разделение предмета</label>
        <InputRange
          minValue={0}
          maxValue={quantity - 1}
          step={1}
          onChange={this.onChange}
          value={value}
        />
      </div>
    )
  }
}
