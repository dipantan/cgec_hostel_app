import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import authReducer from '../reducers/auth/slice';

const rootReducer = combineReducers({
  // your reducers
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Path: src\store\index.js
