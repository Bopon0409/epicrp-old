/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import Slider from './slider'
import ModalHint from './images/modal-hint.png'
import './modal.scss'

export default class ItemModal extends Component {
  state = {
    sliderValue: 0,
    sliderLabel: 0,
    isSliderActive: false,
    isConfirmBtnActive: false,
    activeBtn: ''
  }

  // Добавление ивента на закрытие окна
  componentDidMount () {
    setTimeout(() => {
      document.addEventListener('click', this.handleClickOutside, false)
    }, 500)
  }

  // Удаление ивента на закрытие окна
  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside, false)
  }

  // При нажатии вне модалки, она закрывается
  handleClickOutside = e => {
    const modalBlock = document.getElementsByClassName('modal')[0]
    if (!e.path.includes(modalBlock)) this.props.setModal(false, {}, 0, 0)
  }

  onChangeSlider = sliderValue => this.setState({ sliderValue })

  setActiveBtn = btn =>
    this.setState(({ activeBtn, isConfirmBtnActive }) => {
      if (activeBtn === '') {
        return {
          activeBtn: btn,
          isConfirmBtnActive: true,
          isSliderActive: btn === 'separate' ? true : false
        }
      } else if (activeBtn === btn) {
        return {
          activeBtn: '',
          isConfirmBtnActive: false,
          isSliderActive: false
        }
      } else if (activeBtn && activeBtn !== btn) {
        return {
          activeBtn: '',
          isConfirmBtnActive: false,
          isSliderActive: false
        }
      }
    })

  render () {
    if (!this.props.modal.item) return null
    const { xCord, yCord } = this.props.modal
    const { name, quantity, description, weight } = this.props.modal.item
    const { sliderValue, isSliderActive, isConfirmBtnActive } = this.state

    // Проверка на направление окна, чтобы умещалось на экране
    const isRightDirection = screen.width - xCord > 380
    const cordStyle = isRightDirection
      ? { left: xCord, top: yCord }
      : { left: xCord - 380, top: yCord }

    return (
      <div className='modal' style={cordStyle}>
        <img src={ModalHint} alt='' />
        <div className='modal-text-block'>
          <div className='title'>
            {name} ({quantity})
          </div>
          <div className='description'>{description}</div>
          <div className='weight'>{weight} КГ</div>
        </div>

        <div className='btn-block'>
          <div className='btn' onClick={() => this.setActiveBtn('use')}>
            Использовать
          </div>
          <div className='btn' onClick={() => this.setActiveBtn('remove')}>
            Выбросить
          </div>
          {quantity > 1 ? (
            <div className='btn' onClick={() => this.setActiveBtn('separate')}>
              Разделить
            </div>
          ) : null}
        </div>

        {isSliderActive ? (
          <div className='slider-block'>
            <Slider
              quantity={quantity}
              value={sliderValue}
              onChange={this.onChangeSlider}
            />
          </div>
        ) : null}

        {isConfirmBtnActive ? (
          <div className='btn-block'>
            <div className='btn'>Подтвердить</div>
          </div>
        ) : null}
      </div>
    )
  }
}
