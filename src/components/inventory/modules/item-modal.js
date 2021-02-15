/* eslint-disable default-case */
/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Slider from './slider'

import ModalHint from '../images/modal-hint.png'
import '../scss/modal.scss'

class ItemModal extends Component {
  state = {
    sliderValue: 0,
    isSliderActive: false,
    isConfirmBtnActive: false,
    activeBtn: ''
  }

  componentDidMount () {
    setTimeout(() => {
      document.addEventListener('click', this.handleClickOutside, false)
    }, 500)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside, false)
  }

  handleClickOutside = e => {
    const modalBlock = document.getElementsByClassName('modal')[0]
    if (!e.path.includes(modalBlock)) this.props.setModal(false, {}, 0, 0)
  }

  onChangeSlider = sliderValue => this.setState({ sliderValue })

  setActiveBtn = btn => {
    this.setState(({ activeBtn }) => {
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
  }

  action = () => {
    const { idSlot } = this.props.modal.item
    const { sliderValue } = this.state
    switch (this.state.activeBtn) {
      case 'use':
        this.props.userUseInventaryItem(idSlot)
        break
      case 'remove':
        this.props.userDeleteInventaryItem(idSlot)
        break
      case 'separate':
        if (sliderValue)
          this.props.userSeparateInventaryItem(idSlot, sliderValue)
        break
    }
    this.props.setModal(false, {}, 0, 0)
  }

  render () {
    if (!this.props.modal.item) return null

    const { xCord, yCord } = this.props.modal
    const { name, quantity, description, weight } = this.props.modal.item
    const { item } = this.props.modal
    const {
      sliderValue,
      isSliderActive,
      isConfirmBtnActive,
      activeBtn
    } = this.state

    let useBtnName = 'Использовать'
    if (item.isFastSlot || item.equipmentSlot)
      useBtnName = 'Надеть'
    if (item.idSlot >= 100) useBtnName = 'Снять'

    const sliderBlock = (
      <div className='slider-block'>
        <Slider
          quantity={quantity}
          value={sliderValue}
          onChange={this.onChangeSlider}
        />
      </div>
    )

    const btnBlock = (
      <div className='btn-block'>
        <div className='btn' onClick={this.action}>
          Подтвердить
        </div>
      </div>
    )

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
          <div className='weight'>{(weight * quantity).toFixed(1)} КГ</div>
        </div>

        <div className='btn-block'>
          <div
            className={activeBtn === 'use' ? 'btn active-btn' : 'btn'}
            onClick={() => this.setActiveBtn('use')}
          >
            {useBtnName}
          </div>
          <div
            className={activeBtn === 'remove' ? 'btn active-btn' : 'btn'}
            onClick={() => this.setActiveBtn('remove')}
          >
            Выбросить
          </div>
          {quantity > 1 ? (
            <div
              className={activeBtn === 'separate' ? 'btn active-btn' : 'btn'}
              onClick={() => this.setActiveBtn('separate')}
            >
              Разделить
            </div>
          ) : null}
        </div>

        {isSliderActive ? sliderBlock : null}

        {isConfirmBtnActive ? btnBlock : null}
      </div>
    )
  }
}

ItemModal.propTypes = {
  modal: PropTypes.shape({
    isActive: PropTypes.bool,
    item: PropTypes.object,
    xCord: PropTypes.number,
    yCord: PropTypes.number
  }),
  setModal: PropTypes.func.isRequired,
  userUseInventaryItem: PropTypes.func.isRequired,
  userDeleteInventaryItem: PropTypes.func.isRequired,
  userSeparateInventaryItem: PropTypes.func.isRequired
}

export default ItemModal
