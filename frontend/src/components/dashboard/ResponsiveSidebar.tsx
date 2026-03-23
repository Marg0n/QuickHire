/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { GoHome, GoProjectSymlink, GoSidebarCollapse } from "react-icons/go";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { CiCalendar, CiLogout } from "react-icons/ci";
import { FiBarChart, FiPieChart } from "react-icons/fi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCurrentUser, logout } from "@/services/AuthService";
import { toast } from "react-toastify";
import Button from "../ui/Button";

type MenuItem = {
  label: string;
  icon: React.ReactNode;
  children?: string[];
};

const menuList: MenuItem[] = [
  { label: "Home", icon: <GoHome /> },
  { label: "Calendar", icon: <CiCalendar /> },
  {
    label: "Projects",
    icon: <GoProjectSymlink />,
    children: ["Google", "Facebook", "Twitter", "LinkedIn"],
  },
  { label: "Progress", icon: <FiBarChart /> },
  { label: "Goals", icon: <FiPieChart /> },
];

const bottomList: MenuItem[] = [
  { label: "Notification", icon: <IoNotificationsOutline /> },
  { label: "Setting", icon: <IoSettingsOutline /> },
];

const ResponsiveSidebar: React.FC = () => {
  //* states
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>("Projects");

  //* user state
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  //* fetch from Server Cookie
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  console.log(user);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    toast.success("Logged out successfully");
    router.push("/login");
    router.refresh();
  };

  return (
    <aside className="bg-amber-500 shadow-md rounded-md transition-all duration-300  min-h-full!">
      {/* Header */}
      <div className={`mt-5 ${collapsed ? "px-3" : "px-5"}`}>
        <div className="flex items-center justify-between">
          {!collapsed ? (
            <>
              <Image
                src="https://i.ibb.co.com/0dW7rw4/c38ce4e6-291a-4e25-87b2-93cd1ee23be6-1.png"
                alt="logo"
                width={130}
                height={130}
              />
              <GoSidebarCollapse
                className="text-xl cursor-pointer text-gray-600"
                onClick={() => setCollapsed(true)}
              />
            </>
          ) : (
            <Image
              src="https://i.ibb.co.com/0dW7rw4/c38ce4e6-291a-4e25-87b2-93cd1ee23be6-1.png"
              className="mx-auto cursor-pointer"
              onClick={() => setCollapsed(false)}
              alt="logo"
              width={40}
              height={40}
            />
          )}
        </div>

        {/* Search */}
        {!collapsed ? (
          <div className="relative mt-5">
            <input
              className="px-4 py-2 border rounded-md w-full pl-10 outline-none"
              placeholder="Search..."
            />
            <IoIosSearch className="absolute top-2 left-2 text-xl text-gray-400" />
          </div>
        ) : (
          <IoIosSearch className="text-2xl mx-auto mt-3 text-gray-500 cursor-pointer" />
        )}
      </div>

      {/* Menu */}
      <div className={`mt-6 ${collapsed ? "px-3" : "px-5"}`}>
        {menuList.map((item) => {
          const isOpen = openDropdown === item.label;

          return (
            <div key={item.label}>
              {/* Parent Item */}
              <div
                onClick={() =>
                  item.children && setOpenDropdown(isOpen ? null : item.label)
                }
                className={`flex items-center ${
                  collapsed ? "justify-center" : "justify-between"
                } p-2 hover:bg-gray-100 rounded cursor-pointer`}
              >
                <div className="flex items-center gap-2 text-gray-600">
                  {item.icon}
                  {!collapsed && <span>{item.label}</span>}
                </div>

                {!collapsed && item.children && (
                  <IoIosArrowDown
                    className={`transition ${isOpen ? "rotate-180" : ""}`}
                  />
                )}
              </div>

              {/* Dropdown */}
              {!collapsed && item.children && isOpen && (
                <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-500">
                  {item.children.map((child) => (
                    <li
                      key={child}
                      className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer"
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Bottom Section */}
      <div className={`mt-6 border-t ${collapsed ? "px-3" : "px-5"}`}>
        {bottomList.map((item) => (
          <div
            key={item.label}
            className={`flex items-center ${
              collapsed ? "justify-center" : "justify-between"
            } p-2 hover:bg-gray-100 rounded cursor-pointer`}
          >
            <div className="flex items-center gap-2 text-gray-600">
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </div>
          </div>
        ))}
      </div>
      
      <Button onClick={handleLogout} className="flex gap-2">
        <CiLogout />
        Logout
      </Button>

      {/* Profile */}
      <div className="bg-gray-100 p-4 flex items-center justify-between mt-6 rounded-b-md">
        <div className="flex items-center gap-2">
          <Image
            src="https://i.ibb.co.com/V3m0BHg/anonymous.png"
            className="w-8 h-8 rounded-full object-cover"
            alt="avatar"
            width={32}
            height={32}
          />
          {!collapsed && (
            <span className="text-sm">
              {user?.userData?.name || "John Deo"}
            </span>
          )}
        </div>

        {!collapsed && (
          <div className="relative group">
            <BsThreeDots className="cursor-pointer" />
            <ul className="absolute hidden group-hover:block bg-white shadow-md right-0 mt-2 p-2 rounded text-sm">
              <li className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded cursor-pointer">
                <RiAccountCircleLine /> Profile
              </li>
              <li className="flex items-center gap-2 text-red-500 hover:bg-gray-100 p-1 rounded cursor-pointer">
                <Button onClick={handleLogout} className="flex gap-2">
                  <CiLogout />
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ResponsiveSidebar;
