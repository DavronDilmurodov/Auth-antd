import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

export const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [path, setPath] = useState("/");
  const onNavigate = ({ key }) => {
    navigate(key);
    setPath(key);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical">Logo</div>
      <Menu
        theme="dark"
        mode="inline"
        onClick={onNavigate}
        selectedKeys={[`/${pathname.split("/")[1]}`]}
        items={[
          {
            key: "/",
            icon: <UserOutlined />,
            label: "Home",
          },
          {
            key: "/posts",
            icon: <VideoCameraOutlined />,
            label: "Posts",
          },
          {
            key: "/users",
            icon: <UploadOutlined />,
            label: "Users",
          },
        ]}
      />
    </Sider>
  );
};
