import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsReducer";
import authReducer from "./auth/authReducer";
import logger from "redux-logger";

const getDefaultMD = getDefaultMiddleware();

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: [...getDefaultMD, logger],
});

export const persistor = persistStore(store);
