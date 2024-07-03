"use client";
import { useState } from "react";
import { Layout, Divider } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import MenuList from "./_components/sidebar/MenuList";
import MenuDrawer from "./_components/sidebar/MenuDrawer";
import { openDrawer } from "../_lib/redux/features/sidebar/drawerSidebarMobileSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../_lib/redux/store";
import SidebarHeader from "./_components/sidebar/SidebarHeader";

const { Sider, Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.drawerSidebarMobile.isOpen
  );

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const showDrawer = () => {
    dispatch(openDrawer());
  };

  return (
    <div>
      <button onClick={showDrawer} className="sidebar-drawer-hamburg-button">
        {isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </button>
      <Layout className="h-screen">
        <Sider className="sidebar" theme="light" collapsed={collapsed}>
          <div className="bg-background border-r-[0.1px] border-border pt-6 pb-5">
            <SidebarHeader collapsed={collapsed} />
            <Divider className="bg-border" />
          </div>
          <button
            onClick={toggleCollapsed}
            className="sidbar-hamburg hover:bg-accent-hover hover:duration-500 hover:text-foreground"
          >
            <DoubleRightOutlined
              className={`transform transition-transform duration-500 ${
                collapsed ? "-rotate-45" : "rotate-[135deg]"
              }`}
            />
          </button>
          <MenuList />
        </Sider>
        <div className="">
          <MenuDrawer />
        </div>
        <Layout>
          <Content
            className={`py-5 px-8 bg-background ${
              collapsed ? "content-collapsed" : "content-expanded"
            }`}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
