import React from 'react'

import Inventory from '../inventory'
import Background from '../bg'
import Auth from '../auth'
import Hud from '../hud'
import Chat from '../chat'
import ChoicePers from '../choice-pers'
import CreatePers from '../create-pers'

export default function App () {
  return (
    <>
      <Inventory />
      <Auth />
      <Hud />
      <Background />
      <Chat />
      <ChoicePers />
      <CreatePers />
    </>
  )
}
