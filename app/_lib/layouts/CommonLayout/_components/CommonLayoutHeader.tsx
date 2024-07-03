"use client";
import React, { useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Divider } from "antd";

const menuItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];

interface ICommonLayoutHeaderData {
  headerTitle: string;
  headerDescription: string;
}

const CommonLayoutHeader: React.FC<ICommonLayoutHeaderData> = ({
  headerTitle,
  headerDescription,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`mb-4 ${collapsed ? "collapsed" : ""}`}>
      <Breadcrumb
        style={{
          marginBottom: collapsed ? "0" : "10px",
          transition: "margin-bottom 0.6s ease",
        }}
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },
          {
            href: "",
            title: (
              <>
                <UserOutlined />
                <span>Application List</span>
              </>
            ),
            menu: { items: menuItems },
          },
          {
            title: "Application",
          },
        ]}
      />
      <div
        className={`collapsible-content ${collapsed ? "collapse" : "expanded"}`}
      >
        <div className="flex text-foreground font-bold text-2xl">
          <span>{headerTitle}</span>
        </div>
        <div className="mt-[1.5px] flex text-subText font-medium">
          <span>{headerDescription}</span>
        </div>
      </div>
      <Divider
        className="custom-section-divider"
        orientation="right"
        orientationMargin={20}
      >
        <button
          onClick={toggleCollapsed}
          className="section-devider-collapse-icon hover:bg-accent-hover hover:duration-500 hover:text-foreground"
        >
          <DoubleRightOutlined
            className={`transform transition-transform duration-500 ${
              collapsed ? "rotate-[45deg]" : "rotate-[220deg]"
            }`}
          />
        </button>
      </Divider>
    </div>
  );
};

export default CommonLayoutHeader;
