import React, { memo } from 'react';
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {HashRouter} from 'react-router-dom'

import routes from './router'
import store from './store'

import LJAppHeader from '@/components/app-header'
import LJAppFooter from '@/components/app-footer'
import HYAppPlayerBar from '@/pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
     <LJAppHeader/>
     {renderRoutes(routes)}
    <LJAppFooter/>
    <HYAppPlayerBar/>
    </HashRouter>
    </Provider>
  )
})
