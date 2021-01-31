/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import ModalHint from './images/modal-hint.png'
import './modal.scss'

export default class ItemModal extends Component {
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

  render () {
    if (!this.props.modal.item) return null
    const { xCord, yCord } = this.props.modal
    const { name, quantity, description, weight } = this.props.modal.item
    console.log(name, quantity)
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

        <div className="btn-block">
          <div className="btn">Использовать</div>
          <div className="btn">Разделить</div>
          <div className="btn">Выбросить</div>
        </div>
      </div>
    )
  }
}
