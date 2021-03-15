import * as testBg from './modules/bg.test'
import * as testCreatePers from './modules/create-pers.test'
import * as testInventory from './modules/inventory.test'
import * as testChoisePers from './modules/choice-pers.test'
import * as testAuth from './modules/auth.test'
import * as testChat from './modules/chat.test'
import * as testHud from './modules/hud.test'

const { ...bgTests } = testBg
const { ...createPersTests } = testCreatePers
const { ...inventoryTests } = testInventory
const { ...choisePersTests } = testChoisePers
const { ...authTests } = testAuth
const { ...chatTests } = testChat
const { ...hudTests } = testHud

window.test = {
  ...bgTests,
  ...createPersTests,
  ...inventoryTests,
  ...choisePersTests,
  ...authTests,
  ...chatTests,
  ...hudTests
}

// current tests
const currentTests = () => {
  testBg.setBgActive(true)
  testChat.setChatShow(true)
  testChat.testChatPushMsg()
  testHud.setHudActive(true)
  testHud.setAllHudData()
}

setTimeout(() => process.env.NODE_ENV === 'development' && currentTests(), 0)
