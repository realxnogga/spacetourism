

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // Use sessionStorage
import { combineReducers } from '@reduxjs/toolkit';
import { NavbarSliceReducer } from './feature/navbarSlice';
import { PlanetSliceReducer } from './feature/planetSlice';
import { TechnologySliceReducer } from './feature/technologySlice';

const persistConfig = {
  key: 'root',
  storage: storageSession, // Use sessionStorage
}

const rootReducer = combineReducers({
    NavbarSliceName: NavbarSliceReducer,
    PlanetSliceName: PlanetSliceReducer,
    TechnologySliceName: TechnologySliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(Store);