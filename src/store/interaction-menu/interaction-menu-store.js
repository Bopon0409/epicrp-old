import { makeAutoObservable } from 'mobx'
import CMenu from 'circular-menu/dist/js/circular-menu.js'

class InteractionMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    currentText: 'Закрыть меню'
  }

  setActive = () => {
    const active = !this.state.active
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
    return active
  }
  setCurrentText = text => (this.state.currentText = text)

  setInteractionMenu = data => {
    const active = this.setActive()

    if (active && data.length) {
      const onHoverIn = data => this.setCurrentText(data.text)
      const onHoverOut = () => this.setCurrentText('Закрыть меню')
      const clickHandler = icon => {
        if (window.mp) window.mp.trigger('clickInteractionMenuItem', icon)
      }

      const menus = data.map(({ text, icon, menus }) => ({
        onHoverIn,
        onHoverOut,
        text,
        icon,
        menus: menus
          ? menus
              .map(subEl => ({
                onHoverIn,
                onHoverOut,
                click: () => clickHandler(subEl.icon),
                ...subEl
              }))
              .reverse()
          : null,
        click: () => clickHandler(icon)
      }))

      CMenu('#menu1')
        .config({ hideAfterClick: false, diameter: 400, menus })
        .show([window.innerWidth / 2, window.innerHeight / 2])
        .styles({ 'background-color': 'rgba(0, 0, 0, 0.7)' })
    }
  }
}

export default new InteractionMenuStore()
