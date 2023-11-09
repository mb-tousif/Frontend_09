import { getUserInfo } from "@/utils/getUserInfo";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useState } from "react";
import { SidebarMenus } from "./sidebarMenu";

const Sidebar = ({ collapsed }: { collapsed: true | false }) => {
  const [role, setRole] = useState("");
  useEffect(() => {
    const userInfo = getUserInfo();

    if (userInfo) {
      //@ts-ignore
      setRole(userInfo.role);
    }
  }, [role]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={220}
      style={{
        overflow: "auto",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
        minHeight: "100vh",
      }}
    >
      <div className="demo-logo-vertical">
        {collapsed ? (
          <h3 className="text-[15px] text-center my-5 text-white font-bold">
            PSL
          </h3>
        ) : (
          <h3 className="text-[20px] text-center my-5 text-white font-bold">
            Painting Service Ltd
          </h3>
        )}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={SidebarMenus(role)}
        inlineCollapsed={collapsed}
      />
    </Sider>
  );
};

export default Sidebar;
