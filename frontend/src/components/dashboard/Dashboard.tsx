/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getCurrentUser, logout } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import ResponsiveSidebar from "./ResponsiveSidebar";

const Dashboard = () => {
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
    <div className="flex">
      <div>
        <ResponsiveSidebar />
      </div>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Dashboard;
