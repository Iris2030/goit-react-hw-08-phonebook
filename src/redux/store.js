import contactsReducer from "./reducer";
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { contactsApi } from "./slice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "../Components/Auth/Auth-slice";



const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ['token']
};



const middleware = [...getDefaultMiddleware({serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }}),contactsApi.middleware];

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig,authReducer),
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
