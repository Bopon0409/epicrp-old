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
import './death-menu/death-menu'
import './gun-shop/gun-shop.test'
import './passport/passport.test'
import './work-progress/work-progress.test'
import './work-stats/work-stats.test'
import './contract/contract.test'
import './credit-tablet/credit-tablet.test'
import './med-card/med-card.test'
// import './tattoo-parlor/tattoo-parlor.test'
import './dowload-confirmation-screen/dowload-confirmation-screen.test'
import './shops-and-parlors/shops-and-parlors.test'
import './dialogs/dialogs.test'

import './fractions/ems/inspections/inspection.test'
import './fractions/ems/issue-med-sertificate/issue-med-sertificate.test'
import './fractions/ems/med-sertificate/med-sertificate.test'

import './fractions/government/government-passport-camera/government-passport-camera.test'


export default function curTest () {
  window.test.bg.setActive(true)

  // window.test.carShop.setActive(true);
  // window.test.carShop.setData();
  // window.test.GovPassportCamera.setShow(true);
  // window.test.dialogs.setShow(true);
  // window.test.dialogs.setData();

  window.test.playerMenu.setActive(true);
  window.test.playerMenu.setStatsData();
  window.test.playerMenu.setQuestsData();
}
