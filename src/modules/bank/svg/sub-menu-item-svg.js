import React from 'react'

export default function SubMenuItemSvg ({ active, num }) {
  switch (num) {
    case 1:
      return (
        <svg width='24' height='24' viewBox='0 0 24 24'>
          <path
            d='M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
        </svg>
      )
    case 2:
      return (
        <svg width='24' height='24' viewBox='0 0 24 24'>
          <path
            d='M17.1429 13.1111V11.2778H9.42857V8.83333H17.1429V7L21 10.0556L17.1429 13.1111Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
          <path
            d='M6.85714 18V16.1667H14.5714V13.7222H6.85714V11.8889L3 14.9444L6.85714 18Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
        </svg>
      )
    case 3:
      return (
        <svg width='24' height='24' viewBox='0 0 24 24'>
          <path
            d='M2 0.8C2 0.358172 2.35817 0 2.8 0H22C22.4418 0 22.8 0.358172 22.8 0.8V23.2C22.8 23.4773 22.6564 23.7348 22.4206 23.8805C22.1847 24.0263 21.8902 24.0395 21.6422 23.9155L18.8 22.4944L15.9578 23.9155C15.7325 24.0282 15.4675 24.0282 15.2422 23.9155L12.4 22.4944L9.55777 23.9155C9.33255 24.0282 9.06745 24.0282 8.84223 23.9155L6 22.4944L3.15777 23.9155C2.90978 24.0395 2.61527 24.0263 2.37942 23.8805C2.14356 23.7348 2 23.4773 2 23.2V0.8ZM6.8 8H10V6.4H6.8V8ZM13.2 8H18V6.4H13.2V8ZM10 12.8H6.8V11.2H10V12.8ZM13.2 12.8H18V11.2H13.2V12.8ZM18 17.6H13.2V16H18V17.6Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
        </svg>
      )

    default:
      return null
  }
}
