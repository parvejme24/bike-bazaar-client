import { Outlet } from "react-router";
import { SidebarComponent } from "./Sidebar/Sidebar";
import { useState } from "react";
import { List } from "phosphor-react";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - toggle visibility based on state */}
      <SidebarComponent
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Page Content */}
      <div className="flex-1 p-4 lg:pl-12">
        {/* Mobile hamburger */}
        <div className="lg:hidden mb-4 ">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 border rounded-md"
          >
            <List size={24} />
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
