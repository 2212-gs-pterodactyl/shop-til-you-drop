// import { configureStore } from '@reduxjs/toolkit'
// import cartSlice from './reducers/cartSlice'
// import productsSlice from './reducers/productsSlice'
// import userSlice from './reducers/userSlice'

// const store = configureStore({
//   reducer: {
//     // cart: cartSlice,
//     // user: userSlice,
//     // products: productsSlice,
//   },
// })

// export default store

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth from './auth'

const reducer = combineReducers({ auth })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
