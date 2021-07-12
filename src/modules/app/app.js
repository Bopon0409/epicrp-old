import React             from 'react'
import Inventory         from '../inventory'
import Background        from '../bg'
import Auth              from '../auth'
import Hud               from '../hud'
import Chat              from '../chat'
import ChoicePers        from '../choice-pers'
import CreatePers        from '../create-pers'
import TestModal         from '../test-modal'
import InteractionMenu   from '../interaction-menu'
import Bank              from '../bank'
import Atm               from '../atm'
import Speedometer       from '../speedometer'
import Fraction          from '../fraction'
import House             from '../house'
import { LoadingPage }   from '../loading-page/loading-page'
import { Shop }          from '../shop'
import { CarShop }       from '../car-shop/car-shop'
import { ListMenu }      from '../list-menu/list-menu'
import { Work }          from '../work/work'
import { Electrician }   from '../electrician/electrician'
import { TaxiTablet }    from '../taxi-tablet/taxi-tablet'
import { Admin }         from '../admin/admin'
import { PlayerMenu }    from '../player-menu/player-menu'
import { ClothesShop }   from '../clothes-shop/clothes-shop'
import { SpawnMenu }     from '../spwan-menu/spawn-menu'
import { AdminReport }   from '../admin-report/admin-report'
import { DeathMenu }     from '../death-menu/death-menu'
import { BusinessStats } from '../business-stats/business-stats'
import { GasStation }    from '../gas-station/gas-station'
import 'react-input-range/lib/css/index.css'
import { GunShop }       from '../gun-shop/gun-shop'
import { Passport } from '../passport/passport'
import { WorkProgress } from '../work-progress/work-progress'
import { WorkStats } from '../work-stats/work-stats';
import { MedCard } from '../med-card/med-card'
import { ShopsAndParlors } from '../shops-and-parlors/shops-and-parlors';
import { DownloadConfirmationScreen } from '../jobs/truckers/download-confirmation-screen/download-confirmation-screen'
import { Dialogs } from '../dialogs/dialogs'

//FRACTIONS
import { Inspection } from '../fractions/ems/inspection/inspection'
import { IssueMedSertificate } from '../fractions/ems/issueMedSertificate/issueMedSertificate'
import { MedSertificate } from '../fractions/ems/medSertificate/medSertificate'


export default function App () {
  const devModules = (
    <>
      <TestModal />
      <Background />
    </>
  )

  return (
    <>
      {process.env.NODE_ENV === 'development' && devModules}
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
      <ClothesShop />
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
      <Inspection />
      <IssueMedSertificate />
      <MedSertificate />
      <ShopsAndParlors />
      <DownloadConfirmationScreen />
      <Dialogs />
    </>
  )
}
