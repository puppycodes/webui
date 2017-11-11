import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'

import createHistory from 'history/createBrowserHistory'

import routes from './routes'
import Root from './containers/root'
import configureStore from './store/configure-store'
import '../css/app.less'

const store = configureStore()
// const history = syncHistoryWithStore(hashHistory, store)
const history = createHistory()

window.requestAnimationFrame(() => {
  render(
    <Root
      store={store}
      history={history}
      routes={routes}
    />,
    document.getElementById('root')
  )
})
