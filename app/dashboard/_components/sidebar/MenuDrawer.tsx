import React from "react";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_lib/redux/store";
import { useDispatch } from "react-redux";
import { closeDrawer } from "@/app/_lib/redux/features/sidebar/drawerSidebarMobileSlice";
import MenuList from "./MenuList";

const MenuDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.drawerSidebarMobile.isOpen
  );

  const onClose = () => {
    dispatch(closeDrawer());
  };
  return (
    <Drawer
      title="Basic Drawer"
      onClose={onClose}
      open={isOpen}
      placement="right"
    >
      <MenuList />
    </Drawer>
  );
};

export default MenuDrawer;
