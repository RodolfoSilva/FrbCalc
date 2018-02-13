import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import configureMiddlewares from './configureMiddlewares'
import reducers from './reducers'

const composeEnhancers = composeWithDevTools({ })

const configureStore = () => {
  const middlewares = configureMiddlewares()

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}

export default configureStore
