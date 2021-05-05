import { makeAutoObservable } from 'mobx'
import CMenu from './circular-menu'

class InteractionMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    currentText: 'Закрыть меню'
  }

  setActive = active => {
    this.state.active = active
    const isContainMenu =
      document.querySelector('.interaction-menu').childNodes.length === 4
    if (!active && isContainMenu) {
      document.querySelector('#menu1').remove()
      document.querySelector('.circular-sub-menu').remove()
      document
        .querySelector('.interaction-menu')
        .insertAdjacentHTML(
          'afterbegin',
          `<div id='menu1' className='menu1' />`
        )
    }
  }

  setCurrentText = text => (this.state.currentText = text)

  setInteractionMenu = (active, data) => {
    if (active && this.state.active) return
    this.setActive(active)

    if (active && data.length) {
      const onHoverIn = data => this.setCurrentText(data.text)
      const onHoverOut = () => this.setCurrentText('Закрыть меню')
      const clickHandler = name => {
        window.clientTrigger('interact.click', name)
      }

      const menus = data.map(({ text, icon, menus, name }) => ({
        onHoverIn,
        onHoverOut,
        text,
        icon,
        menus: menus
          ? menus
              .map(subEl => ({
                onHoverIn,
                onHoverOut,
                click: () => clickHandler(subEl.name),
                ...subEl
              }))
              .reverse()
          : null,
        click: () => clickHandler(name)
      }))

      CMenu('#menu1')
        .config({
          hideAfterClick: false,
          diameter: window.innerHeight / 2,
          menus
        })
        .show([window.innerWidth / 2, window.innerHeight / 2])
        .styles({ 'background-color': 'rgba(0, 0, 0, 0.7)' })
    }
  }
}

export default new InteractionMenuStore()
