import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import tests from './tests/test'

ReactDOM.render(<App />, document.getElementById('root'))

process.env.NODE_ENV === 'development' && tests()

