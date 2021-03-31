import React from 'react'

import Inventory from '../inventory-hooks'
import Background from '../bg'
import Auth from '../auth'
import Hud from '../hud'
import Chat from '../chat'
import ChoicePers from '../choice-pers'
import CreatePers from '../create-pers'
import TestModal from '../test-modal'
import InteractionMenu from '../interaction-menu'

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
      <Inventory />
      <Auth />
      <Hud />
      <Chat />
      <ChoicePers />
      <CreatePers />
      <InteractionMenu />
    </>
  )
}
