import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import './bridge'
import './tests'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
