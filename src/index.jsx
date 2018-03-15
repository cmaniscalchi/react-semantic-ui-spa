import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Main from './Main'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(Main)
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./Main', () => { render(Main) })
}
