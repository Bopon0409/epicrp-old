import React, { useState } from 'react'

export default function EmptyCard () {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width='420'
        height='250'
        viewBox='0 0 420 250'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='420'
          height='250'
          rx='15'
          fill='white'
          fillOpacity={hover ? 0.05 : 0.02}
        />
        <rect
          x='0.25'
          y='0.25'
          width='419.5'
          height='249.5'
          rx='14.75'
          stroke='white'
          strokeOpacity={hover ? 1 : 0.3}
          strokeWidth='0.5'
          strokeDasharray='20 20'
        />
        <path
          d='M217.999 124.092C218.215 124.092 218.395 124.164 218.539 124.308C218.707 124.428 218.791 124.584 218.791 124.776C218.791 124.992 218.707 125.172 218.539 125.316C218.395 125.46 218.215 125.532 217.999 125.532H210.691V132.804C210.691 133.02 210.619 133.2 210.475 133.344C210.355 133.488 210.199 133.56 210.007 133.56C209.815 133.56 209.647 133.488 209.503 133.344C209.383 133.2 209.323 133.02 209.323 132.804V125.532H202.015C201.799 125.532 201.607 125.46 201.439 125.316C201.295 125.148 201.223 124.968 201.223 124.776C201.223 124.584 201.295 124.428 201.439 124.308C201.607 124.164 201.799 124.092 202.015 124.092H209.323V116.784C209.323 116.568 209.383 116.388 209.503 116.244C209.647 116.076 209.815 115.992 210.007 115.992C210.199 115.992 210.355 116.076 210.475 116.244C210.619 116.388 210.691 116.568 210.691 116.784V124.092H217.999Z'
          fill='white'
          fillOpacity={hover ? 1 : 0.3}
        />
        <rect
          x='172.25'
          y='87.25'
          width='75.5'
          height='75.5'
          rx='37.75'
          stroke='white'
          strokeOpacity={hover ? 1 : 0.3}
          strokeWidth='0.5'
          strokeDasharray='10 10'
        />
      </svg>
      <div className='card__empty-text'>Оформить новый счет</div>
    </div>
  )
}
