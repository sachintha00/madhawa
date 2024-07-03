import { configureStore } from "@reduxjs/toolkit";
import drawerSidebarMobileReducer from "./features/sidebar/drawerSidebarMobileSlice";

const store = configureStore({
  reducer: {
    drawerSidebarMobile: drawerSidebarMobileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
