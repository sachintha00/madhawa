import React from "react";
import {
  AppstoreAddOutlined,
  PlusOutlined,
  MoonOutlined,
  SunOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import { useTheme } from "next-themes";

const FloatingButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <FloatButton.Group
      trigger="click"
      style={{ right: 24, color: "white" }}
      icon={<PlusOutlined style={{ color: "#3399ff" }} />}
      closeIcon={<CloseOutlined style={{ color: "#3399ff" }} />}
    >
      <FloatButton
        onClick={toggleTheme}
        icon={
          theme === "light" ? (
            <MoonOutlined style={{ color: "#3399ff" }} />
          ) : (
            <SunOutlined style={{ color: "#3399ff" }} />
          )
        }
      />
      <FloatButton
        icon={<AppstoreAddOutlined style={{ color: "#3399ff" }} />}
      />
    </FloatButton.Group>
  );
};

export default FloatingButton;
