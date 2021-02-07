import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './bridge'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
