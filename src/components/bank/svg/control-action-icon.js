import React from 'react'

export default function ControlactionIcon ({ active, num }) {
  switch (num) {
    case 1:
      return (
        <svg width='18' height='18' viewBox='0 0 18 18'>
          <path
            d='M17 9C17 11.1217 16.1571 13.1566 14.6569 14.6569C13.1566 16.1571 11.1217 17 9 17C6.87827 17 4.84344 16.1571 3.34315 14.6569C1.84285 13.1566 1 11.1217 1 9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9ZM9.5 5.5C9.5 5.36739 9.44732 5.24021 9.35355 5.14645C9.25979 5.05268 9.13261 5 9 5C8.86739 5 8.74021 5.05268 8.64645 5.14645C8.55268 5.24021 8.5 5.36739 8.5 5.5V8.5H5.5C5.36739 8.5 5.24021 8.55268 5.14645 8.64645C5.05268 8.74021 5 8.86739 5 9C5 9.13261 5.05268 9.25979 5.14645 9.35355C5.24021 9.44732 5.36739 9.5 5.5 9.5H8.5V12.5C8.5 12.6326 8.55268 12.7598 8.64645 12.8536C8.74021 12.9473 8.86739 13 9 13C9.13261 13 9.25979 12.9473 9.35355 12.8536C9.44732 12.7598 9.5 12.6326 9.5 12.5V9.5H12.5C12.6326 9.5 12.7598 9.44732 12.8536 9.35355C12.9473 9.25979 13 9.13261 13 9C13 8.86739 12.9473 8.74021 12.8536 8.64645C12.7598 8.55268 12.6326 8.5 12.5 8.5H9.5V5.5Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
        </svg>
      )
    case 2:
      return (
        <svg width='18' height='18' viewBox='0 0 18 18'>
          <path
            d='M9 1.125C13.3488 1.125 16.875 4.65117 16.875 9C16.875 13.3488 13.3488 16.875 9 16.875C4.65117 16.875 1.125 13.3488 1.125 9C1.125 4.65117 4.65117 1.125 9 1.125ZM5.625 9.42188C5.625 9.49922 5.68828 9.5625 5.76562 9.5625H12.2344C12.3117 9.5625 12.375 9.49922 12.375 9.42188V8.57812C12.375 8.50078 12.3117 8.4375 12.2344 8.4375H5.76562C5.68828 8.4375 5.625 8.50078 5.625 8.57812V9.42188Z'
            fill='white'
            fillOpacity={active ? 1 : 0.3}
          />
        </svg>
      )
    default:
      return null
  }
}
