import { makeAutoObservable } from 'mobx'

import * as testBg from '../../tests/modules/bg.test'
import * as testCreatePers from '../../tests/modules/create-pers.test'
import * as testInventory from '../../tests/inventory/inventory.test'
import * as testChoisePers from '../../tests/modules/choice-pers.test'
import * as testAuth from '../../tests/modules/auth.test'
import * as testChat from '../../tests/modules/chat.test'
import * as testHud from '../../tests/modules/hud.test'
import * as testInteractionMenu from '../../tests/modules/interaction-menu.test'
import * as testBank from '../../tests/bank/bank.test'
import * as testAtm from '../../tests/atm/atm.test'

class TestModalStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    currentModule: 'testBg',
    checkbox: false,
    testsModules: {
      testBg: { title: 'testBg', ...testBg },
      testCreatePers: { title: 'testCreatePers', ...testCreatePers },
      testInventory: { title: 'testInventory', ...testInventory },
      testChoisePers: { title: 'testChoisePers', ...testChoisePers },
      testAuth: { title: 'testAuth', ...testAuth },
      testChat: { title: 'testChat', ...testChat },
      testHud: { title: 'testHud', ...testHud },
      testInteractionMenu: {
        title: 'testInteractionMenu',
        ...testInteractionMenu
      },
      testBank: {
        title: 'testBank',
        ...testBank
      },
      testAtm: {
        title: 'test Atm',
        ...testAtm
      }
    }
  }

  setActive = active => (this.state.active = active)
  setCurrentModule = moduleName => (this.state.currentModule = moduleName)
  setCheckbox = state => (this.state.checkbox = state)
}

export default new TestModalStore()
