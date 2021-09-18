import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import projects from '../redux/projects/projects-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, 'authReducer'),
    projects,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
