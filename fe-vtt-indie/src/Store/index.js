import {compose, createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import {persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"
import {dotenv} from "dotenv/config"
import dataReducer from "../Reducers/globalDataReducer.js"
import userReducer from "../Reducers/userReducer.js"
import authReducer from "../Reducers/authReducer.js"

const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  data: {
    loggedIn: false,
    loading: true,
    location: ""
  },
  user: {
    info: {}
  },
  auth: {
    b64Auth: ""
  }
}

const persistConfig = {
  key: "root",
  storage,
  transforms: [
      encryptTransform({
          secretKey: "stewtanic",
      })
  ],
  blacklist: ["data, user, auth"]
}

const bigReducer = combineReducers({
  data: dataReducer,
  user: userReducer,
  auth: authReducer,
})

const persistedBigReducer = persistReducer(persistConfig, bigReducer)



export const configureStore = createStore(persistedBigReducer,initialState, aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk)))

export const persistor = persistStore(configureStore)