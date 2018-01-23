import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import configureMiddlewares from './configureMiddlewares'
import reducers from './reducers'

const configureStore = () => {
  const middlewares = configureMiddlewares()

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  return store
}

export default configureStore
