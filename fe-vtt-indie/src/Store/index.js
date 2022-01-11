import {compose, createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import {persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"
import {dotenv} from "dotenv/config"
import userReducer from "../Reducers/userReducer.js"

const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  data: {
    loggedIn: false,
    loading: true,
  },
}

const persistConfig = {
  key: "root",
  storage,
  transforms: [
      encryptTransform({
          secretKey: "stewtanic",
      })
  ] 
}

const bigReducer = combineReducers({
  data: userReducer,
})

const persistedBigReducer = persistReducer(persistConfig, bigReducer)



export const configureStore = createStore(persistedBigReducer,initialState, aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk)))

export const persistor = persistStore(configureStore)