import React, { useState, useEffect } from 'react'

export default function InteractionMenu () {
  useEffect(() => {
    const wrapper = document.getElementById('cn-wrapper')
    wrapper.classList.add('opened-nav')
  }, [])

  return (
    <div className='container csstransforms'>
      <div className='component'>
        <h2>Hi</h2>
        <button className='cn-button' id='cn-button'>
          Показать документы
        </button>
        <div className='cn-wrapper' id='cn-wrapper'>
          <ul>
            <li>
              <a href='#'>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Furniture</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Transport</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Gift</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Clothes</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Games</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Stationary</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Toys</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Books</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Login</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Register</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Sell</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
