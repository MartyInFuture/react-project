import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistRebucer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistRebucer(authPersistConfig, 'authReducer'),
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
