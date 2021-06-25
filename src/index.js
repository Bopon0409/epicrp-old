import React    from 'react'
import ReactDOM from 'react-dom'
import App      from './modules/app'
import tests    from './tests/test'

ReactDOM.render(<App />, document.getElementById('root'))
process.env.NODE_ENV === 'development' && setTimeout(() => tests(), 0)

document.body.onkeydown = (event) => alert(`onkeydown ${event.code}`)
document.body.onkeyup = (event) => alert(`onkeyup ${event.code}`)
document.body.onkeypress = (event) => alert(`onkeypress ${event.code}`)
