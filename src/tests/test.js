import './atm/atm.test'
import './auth/auth.test'
import './bank/bank.test'
import './bg/bg.test'
import './chat/chat.test'
import './choise-pers/choice-pers.test'
import './create-pers/create-pers.test'
import './hud/hud.test'
import './interaction-menu/interaction-menu.test'
import './inventory/inventory.test'
import './speedometer/speedometer.test'
import './fraction/fraction.test'
import './house/house.test'

export default function curTest () {
  window.test.bg.setActive(true)
  // window.test.house.setData()
  // window.trigger('house.mode', 3)
  window.test.chat.setChatShow(true)
  window.test.chat.testChatPushMsg()
  window.test.hud.setAllData()
  window.test.hud.setActive(true)
}
