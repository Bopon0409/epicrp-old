import React from 'react'
import img from './images/news-img.png'
import line from './images/line.svg'

export default function newsItem ({ title, text }) {
  return (
    <div className='news-item'>
      <div className='img-wrap'>
        <img className='img' src={img} alt='' />
      </div>
      <div className='text-block'>
        <div className='title'>{title}</div>
        <div className='text'>{text}</div>
      </div>
      <img src={line} alt='' className='line' />
    </div>
  )
}
