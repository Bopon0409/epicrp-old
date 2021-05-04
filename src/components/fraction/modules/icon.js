import React from 'react'

export default function Icon ({ icon, active }) {
  if (active === undefined) active = true
  const color = active ? 'white' : '#C4C4C4'
  return null

  // switch (icon) {
  //   case 'info':
  //     return (

  //     )

  //   case 'members':
  //     return (

  //     )

  //   case 'activity':
  //     return (

  //     )

  //   case 'groups':
  //     return (

  //     )

  //   case 'cars':
  //     return (

  //     )

  //   case 'storage':
  //     return (

  //     )

  //   case 'settings':
  //     return (

  //     )

  //   case 'search':
  //     return (

  //     )

  //   case 'close':
  //     return (

  //     )
  //   default:
  //     return null
  // }
}
