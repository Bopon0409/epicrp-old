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
import './loading-page/loading-page.test'
import './shop/shop.test'
import './car-shop/car-shop.test'
import './list-menu/list-menu.test'
import './work/work.test'
import './electrician/electrician.test'
import './taxi-tablet/taxi-tablet.test'
import './admin/admin.test'
import './player-menu/player-menu.test'
import './clothes-shop/clothes-shop.test'
import './spawn-menu/spawn-menu.test'
import './admin-report/admin-report.test'
import './business-stats/business-stats.test'
import './gas-station/gas-station.test'

export default function curTest () {
  window.test.bg.setActive(true)
  window.test.playerMenu.setStatsData()
  window.test.playerMenu.setSettingsData()
  window.test.playerMenu.setActive(true)
}
