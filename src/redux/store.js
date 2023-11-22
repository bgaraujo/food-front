import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './stores/StoreSlice'; 

export default configureStore({
    reducer: {
        store: storeReducer
     },
  });
  