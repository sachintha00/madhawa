import { createSlice } from "@reduxjs/toolkit";

interface DrawerSidebarMobileState {
  isOpen: boolean;
}

const initialState: DrawerSidebarMobileState = {
  isOpen: false,
};

const drawerSidebarMobileSlice = createSlice({
  name: "drawerSidebarMobile",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggle, openDrawer, closeDrawer } = drawerSidebarMobileSlice.actions;
export default drawerSidebarMobileSlice.reducer;
