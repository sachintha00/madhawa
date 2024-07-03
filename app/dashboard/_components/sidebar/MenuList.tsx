import React, { useEffect } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  href?: string
): MenuItem =>
  ({
    key,
    icon,
    children,
    label: href ? <Link href={href}>{label}</Link> : label,
  } as MenuItem);

const menuItems: MenuItem[] = [
  getItem("Home", "home", <HomeOutlined />, undefined, "/dashboard"),
  getItem(
    "Activity",
    "activity",
    <AppstoreOutlined />,
    undefined,
    "/dashboard/activity"
  ),
  getItem("Task", "task", <BarsOutlined />, [
    getItem("Task 1", "task-1", undefined, undefined, "/task-1"),
    getItem("Task 2", "task-2", undefined, undefined, "/task-2"),
    getItem("Task 3", "task-3", undefined, undefined, "/task-3"),
    getItem("Task 4", "subtask1", undefined, [
      getItem(
        "Sub Task 1",
        "sub-task1-1",
        undefined,
        undefined,
        "/sub-task1-1"
      ),
      getItem(
        "Sub Task 2",
        "sub-task1-2",
        undefined,
        undefined,
        "/sub-task1-2"
      ),
      getItem(
        "Sub Task 3",
        "sub-task1-3",
        undefined,
        undefined,
        "/sub-task1-3"
      ),
      getItem(
        "Sub Task 4",
        "sub-task1-4",
        undefined,
        undefined,
        "/sub-task1-4"
      ),
    ]),
    getItem("Task 5", "task-5", undefined, undefined, "/task-5"),
    getItem("Task 6", "task-6", undefined, undefined, "/task-6"),
    getItem("Task 7", "subtask2", undefined, [
      getItem(
        "Sub Task 1",
        "sub-task2-1",
        undefined,
        undefined,
        "/sub-task2-1"
      ),
      getItem(
        "Sub Task 2",
        "sub-task2-2",
        undefined,
        undefined,
        "/sub-task2-2"
      ),
      getItem(
        "Sub Task 3",
        "sub-task2-3",
        undefined,
        undefined,
        "/sub-task2-3"
      ),
      getItem(
        "Sub Task 4",
        "sub-task2-4",
        undefined,
        undefined,
        "/sub-task2-4"
      ),
    ]),
  ]),
  getItem(
    "Progress",
    "progress",
    <AreaChartOutlined />,
    undefined,
    "/progress"
  ),
  getItem("Payment", "payment", <PayCircleOutlined />, undefined, "/payment"),
  getItem("Setting", "setting", <SettingOutlined />, undefined, "/setting"),
];

const MenuList: React.FC = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push("/dashboard");
  // }, [router]);

  return (
    <Menu
      theme="light"
      mode="inline"
      className="menu-bar h-screen"
      // defaultSelectedKeys={["home"]}
      items={menuItems}
    />
  );
};

export default MenuList;
