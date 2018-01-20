import React from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import store from './store'
import persistor from './persistor'
import Screens from './screens'

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Screens />
    </PersistGate>
  </Provider>
)

export default Root
