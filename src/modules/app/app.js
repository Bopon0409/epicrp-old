import React                          from 'react'
import Inventory                      from '../inventory'
import Background                     from '../bg'
import Auth                           from '../auth'
import Hud                            from '../hud'
import Chat                           from '../chat'
import ChoicePers                     from '../choice-pers'
import CreatePers                     from '../create-pers'
import TestModal                      from '../test-modal'
import InteractionMenu                from '../interaction-menu'
import Bank                           from '../bank'
import Atm                            from '../atm'
import Speedometer                    from '../speedometer'
import Fraction                       from '../fraction'
import House                          from '../house'
import { LoadingPage }                from '../loading-page/loading-page'
import { Shop }                       from '../shop'
import { CarShop }                    from '../car-shop/car-shop'
import { ListMenu }                   from '../list-menu/list-menu'
import { Work }                       from '../work/work'
import { Electrician }                from '../electrician/electrician'
import { TaxiTablet }                 from '../taxi-tablet/taxi-tablet'
import { Admin }                      from '../admin/admin'
import { PlayerMenu }                 from '../player-menu/player-menu'
import { SpawnMenu }                  from '../spwan-menu/spawn-menu'
import { AdminReport }                from '../admin-report/admin-report'
import { DeathMenu }                  from '../death-menu/death-menu'
import { BusinessStats }              from '../business-stats/business-stats'
import { GasStation }                 from '../gas-station/gas-station'
import { GunShop }                    from '../gun-shop/gun-shop'
import { Contract }                   from '../contract/contract'
import { CreditTablet }               from '../credit-tablet/credit-tablet'
import { Passport }                   from '../passport/passport'
import { WorkProgress }               from '../work-progress/work-progress'
import { WorkStats }                  from '../work-stats/work-stats'
import { MedCard }                    from '../med-card/med-card'
import { ShopsAndParlors }            from '../shops-and-parlors/shops-and-parlors'
import { DownloadConfirmationScreen } from '../jobs/truckers/download-confirmation-screen/download-confirmation-screen'
import { Dialogs }                    from '../dialogs/dialogs'
import { Fractions }                  from '../fractions/Fractions'
import { Phone }                      from '../phone/phone'
import { StateAgency }                from '../state-agency/state-agency'
import 'react-input-range/lib/css/index.css'
import { Alerts }                     from '../alerts/alerts'

export default function App () {
  const devModules = (
    <>
      <TestModal />
      <Background />
    </>
  )

  return (
    <>
      {devModules}
      <Bank />
      <Inventory />
      <Auth />
      <Hud />
      <Chat />
      <ChoicePers />
      <CreatePers />
      <InteractionMenu />
      <Atm />
      <Speedometer />
      <Fraction />
      <House />
      <Shop />
      <LoadingPage />
      <CarShop />
      <ListMenu />
      <Work />
      <Electrician />
      <TaxiTablet />
      <Admin />
      <PlayerMenu />
      <SpawnMenu />
      <AdminReport />
      <BusinessStats />
      <DeathMenu />
      <GasStation />
      <GunShop />
      <Passport />
      <WorkProgress />
      <WorkStats />
      <MedCard />
      <Fractions />
      <ShopsAndParlors />
      <Contract />
      <CreditTablet />
      <DownloadConfirmationScreen />
      <Dialogs />
      <Phone />
      <StateAgency />
      <Alerts />
    </>
  )
}
