import React from 'react'
import img from './images/news-img.png'
import line from './images/line.svg'

export default function newsItem () {
  return (
    <div className='news-item'>
      <div className='img-wrap'>
        <img className='img' src={img} alt='' />
      </div>
      <div className='text-block'>
        <div className='title'>Новость</div>
        <div className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quidem dolores quaerat animi iusto distinctio!
        </div>
      </div>
      <img src={line} alt='' className='line' />
    </div>
  )
}
