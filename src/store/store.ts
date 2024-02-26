import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
export const config = {
  key: 'root',
  storage: storage,
  whitelist: ['language', 'favorites', 'cart'],
};
const persisted = persistReducer(config, rootReducer);
export const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;