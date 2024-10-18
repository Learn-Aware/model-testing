"use client";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleMenuClick = (e: any) => {
    const key = e.key;
    if (key === "1") {
      router.push("/question-settings");
    } else if (key === "2") {
      router.push("/user-settings");
    } else if (key === "3") {
      router.push("/system-settings");
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      theme="light"
    >
      <div className="logo" style={{ height: 32, margin: 16 }}>
        <h3 className="text-black text-center font-sans text-2xl font-bold">
          Learnaware AI
        </h3>
      </div>
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        onClick={handleMenuClick}
      >
        <Menu.Item key="1" icon={<MessageOutlined />}>
          Question Settings
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          User Settings
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          System Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
