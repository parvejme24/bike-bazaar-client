import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Drawer, Button } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";

export default function DashboardLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar for Large Screens */}
      <aside className="w-64 bg-gray-900 text-white p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/my-profile"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/dashboard/manage-users"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
            }
          >
            Manage Users
          </NavLink>
          <NavLink
            to="/dashboard/manage-products"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
            }
          >
            Manage Products
          </NavLink>
          <NavLink
            to="/dashboard/all-orders"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
            }
          >
            All Orders
          </NavLink>
        </nav>
      </aside>

      {/* Hamburger Icon for Small & Medium Screens */}
      <div className="md:hidden p-4">
        <Button type="text" onClick={toggleDrawer}>
          <RxHamburgerMenu className="text-3xl font-bold" />
        </Button>
      </div>

      {/* Drawer for Small & Medium Screens */}
      <Drawer
        title="Dashboard Menu"
        placement="left"
        onClose={toggleDrawer}
        open={drawerOpen}
      >
        <nav className="flex flex-col gap-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
            }
            onClick={toggleDrawer}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/my-profile"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
            }
            onClick={toggleDrawer}
          >
            My Profile
          </NavLink>
          <NavLink
            to="/dashboard/manage-users"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
            }
            onClick={toggleDrawer}
          >
            Manage Users
          </NavLink>
          <NavLink
            to="/dashboard/manage-products"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
            }
            onClick={toggleDrawer}
          >
            Manage Products
          </NavLink>
          <NavLink
            to="/dashboard/all-orders"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
            }
            onClick={toggleDrawer}
          >
            All Orders
          </NavLink>
        </nav>
      </Drawer>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
