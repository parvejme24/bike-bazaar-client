import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Button, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  UserOutlined,
  ShoppingOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // Get the current active path
  const activeKey = location.pathname.split("/")[2] || "";

  // Sidebar toggle function
  const toggleCollapsed = () => setCollapsed(!collapsed);

  // Dashboard menu items
  const menuItems = [
    { key: "", icon: <PieChartOutlined />, label: "Dashboard" },
    { key: "my-profile", icon: <UserOutlined />, label: "My Profile" },
    { key: "manage-users", icon: <UserOutlined />, label: "Manage Users" },
    { key: "manage-products", icon: <ShoppingOutlined />, label: "Manage Products" },
    { key: "all-orders", icon: <FileTextOutlined />, label: "All Orders" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white absolute md:relative transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Sidebar Toggle Button */}
        <div className="flex justify-end p-4">
          <Button type="primary" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>

        {/* Sidebar Menu */}
        <Menu
          className="h-screen"
          theme="dark"
          mode="inline"
          inlineCollapsed={collapsed}
          selectedKeys={[activeKey]}
        >
          {menuItems.map(({ key, icon, label }) => (
            <Menu.Item key={key} icon={icon}>
              <NavLink
                to={`/dashboard/${key}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-white"
                }
              >
                {label}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
