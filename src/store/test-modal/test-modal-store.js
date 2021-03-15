import { makeAutoObservable } from 'mobx'

import * as testBg from '../../tests/modules/bg.test'
import * as testCreatePers from '../../tests/modules/create-pers.test'
import * as testInventory from '../../tests/modules/inventory.test'
import * as testChoisePers from '../../tests/modules/choice-pers.test'
import * as testAuth from '../../tests/modules/auth.test'
import * as testChat from '../../tests/modules/chat.test'
import * as testHud from '../../tests/modules/hud.test'

class TestModalStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    currentModule: 'testBg',
    testsModules: {
      testBg: { title: 'testBg', ...testBg },
      testCreatePers: { title: 'testCreatePers', ...testCreatePers },
      testInventory: { title: 'testInventory', ...testInventory },
      testChoisePers: { title: 'testChoisePers', ...testChoisePers },
      testAuth: { title: 'testAuth', ...testAuth },
      testChat: { title: 'testChat', ...testChat },
      testHud: { title: 'testHud', ...testHud }
    }
  }

  setCurrentModule = moduleName => (this.state.currentModule = moduleName)
}

export default new TestModalStore()
