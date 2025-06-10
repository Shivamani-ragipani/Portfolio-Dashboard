import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './slices/sidebarSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    theme: themeSlice,
  },
});

export default store;