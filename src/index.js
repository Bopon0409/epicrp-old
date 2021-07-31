import React    from 'react'
import ReactDOM from 'react-dom'
import './globals'
import App      from './modules/app'
import tests    from './tests/test'

ReactDOM.render(<App />, document.getElementById('root'))
process.env.NODE_ENV === 'development' && setTimeout(() => tests(), 0)