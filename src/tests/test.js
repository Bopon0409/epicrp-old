import * as testBg from './modules/bg.test'
import * as testCreatePers from './modules/create-pers.test'
import * as testInventory from './inventory/inventory.test'
import * as testChoisePers from './modules/choice-pers.test'
import * as testAuth from './modules/auth.test'
import * as testChat from './modules/chat.test'
import * as testHud from './modules/hud.test'
import * as testInteractionMenu from './modules/interaction-menu.test'
import * as testBank from './bank/bank.test'

const { ...bgTests } = testBg
const { ...createPersTests } = testCreatePers
const { ...inventoryTests } = testInventory
const { ...choisePersTests } = testChoisePers
const { ...authTests } = testAuth
const { ...chatTests } = testChat
const { ...hudTests } = testHud
const { ...interactionMenuTests } = testInteractionMenu
const { ...bankTests } = testBank

window.test = {
  bgTests,
  createPersTests,
  inventoryTests,
  choisePersTests,
  authTests,
  chatTests,
  hudTests,
  interactionMenuTests,
  bankTests
}

// current tests
const currentTests = () => {
  bankTests.setActive(true)
  bankTests.updateData()
}

setTimeout(() => process.env.NODE_ENV === 'development' && currentTests(), 0)
