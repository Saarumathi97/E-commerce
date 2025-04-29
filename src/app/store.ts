// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/ProductSlice';

export const store = configureStore({
	reducer: {
		product: productSlice,
	},
});

// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
