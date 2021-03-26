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

export default function App () {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <TestModal />}
      <Inventory />
      <Auth />
      <Hud />
      <Background />
      <Chat />
      <ChoicePers />
      <CreatePers />
      <InteractionMenu />
    </>
  )
}
