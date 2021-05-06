import React from 'react'
import ReactDOM from 'react-dom'
import tests from './tests/test'
import App from './components/app'

ReactDOM.render(<App />, document.getElementById('root'))

process.env.NODE_ENV === 'development' && tests()

