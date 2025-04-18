import { NavLink } from "react-router-dom";
import {
  Barcode,
  CaretDown,
  ChartPie,
  CheckSquare,
  Checks,
  HourglassLow,
  HouseLine,
  PencilLine,
  PresentationChart,
  X,
} from "phosphor-react";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Sidebar,
  SidebarBody,
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from "keep-react";

export const SidebarComponent = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed lg:static z-40 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "left-0" : "-left-full"
        } w-[250px] h-full border-r shadow-md`}
      >
        <Sidebar className="min-h-screen p-4">
          <SidebarBody>
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-bold">
                Bike<span className="font-light">Bazaar</span>
              </p>
              <button onClick={onClose} className="lg:hidden">
                <X size={20} />
              </button>
            </div>

            <SidebarList className="space-y-0.5">
              <NavLink to="/" onClick={onClose}>
                <SidebarItem>
                  <HouseLine size={20} />
                  Home
                </SidebarItem>
              </NavLink>

              {/* Dashboard Dropdown */}
              <SidebarItem dropdown>
                <SidebarDropdown>
                  <SidebarCollapse>
                    <div className="flex items-center gap-3">
                      <PresentationChart size={20} />
                      Dashboard
                    </div>
                    <CaretDown size={20} />
                  </SidebarCollapse>
                  <SidebarDropdownList>
                    <NavLink to="/dashboard/user" onClick={onClose}>
                      <SidebarItem>
                        <HouseLine size={20} />
                        User Home
                      </SidebarItem>
                    </NavLink>
                    <NavLink to="/dashboard/user/profile" onClick={onClose}>
                      <SidebarItem>
                        <PencilLine size={20} />
                        Update Info
                      </SidebarItem>
                    </NavLink>
                    <NavLink to="/dashboard/user/orders" onClick={onClose}>
                      <SidebarItem>
                        <Barcode size={20} />
                        My Orders
                      </SidebarItem>
                    </NavLink>
                    <NavLink to="/dashboard/admin" onClick={onClose}>
                      <SidebarItem>
                        <ChartPie size={20} />
                        Admin Panel
                      </SidebarItem>
                    </NavLink>
                  </SidebarDropdownList>
                </SidebarDropdown>
              </SidebarItem>

              {/* Tasks Dropdown */}
              <SidebarItem dropdown>
                <SidebarDropdown>
                  <SidebarCollapse>
                    <div className="flex items-center gap-3">
                      <CheckSquare size={20} />
                      Tasks
                    </div>
                    <CaretDown size={20} />
                  </SidebarCollapse>
                  <SidebarDropdownList>
                    <NavLink to="/dashboard/user" onClick={onClose}>
                      <SidebarItem>
                        <HourglassLow size={20} />
                        In Progress
                      </SidebarItem>
                    </NavLink>
                    <NavLink to="/dashboard/user/orders" onClick={onClose}>
                      <SidebarItem>
                        <Checks size={20} />
                        Completed
                      </SidebarItem>
                    </NavLink>
                  </SidebarDropdownList>
                </SidebarDropdown>
              </SidebarItem>
            </SidebarList>
          </SidebarBody>

          <SidebarFooter className="pt-4">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/images/avatar/avatar-1.png" alt="avatar" />
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-body-4 font-medium text-metal-400">
                  Enzo Farnandez
                </p>
                <p className="text-body-4 font-normal text-metal-300">
                  enzo123@gmail.com
                </p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
      </div>
    </>
  );
};
