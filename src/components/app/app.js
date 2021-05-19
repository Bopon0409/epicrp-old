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

import 'react-input-range/lib/css/index.css'

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
    </>
  )
}
