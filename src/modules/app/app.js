import React           from 'react'
import Inventory       from '../inventory'
import Background      from '../bg'
import Auth            from '../auth'
import Hud             from '../hud'
import Chat            from '../chat'
import ChoicePers      from '../choice-pers'
import CreatePers      from '../create-pers'
import TestModal       from '../test-modal'
import InteractionMenu from '../interaction-menu'
import Bank            from '../bank'
import Atm             from '../atm'
import Speedometer     from '../speedometer'
import Fraction        from '../fraction'
import House           from '../house'
import { LoadingPage } from '../loading-page/loading-page'
import { Shop }        from '../shop'
import { CarShop }     from '../car-shop/car-shop'
import { ListMenu }    from '../list-menu/list-menu'
import { Work }        from '../work/work'
import 'react-input-range/lib/css/index.css'
import { Electrician } from '../electrician/electrician'
import { TaxiTablet }  from '../taxi-tablet/taxi-tablet'
import { Admin }       from '../admin/admin'
import { PlayerMenu }  from '../player-menu/player-menu'
import { ClothesShop } from '../clothes-shop/clothes-shop'
import { SpawnMenu }   from '../spwan-menu/spawn-menu'

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
    </>
  )
}
