/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Button from "@/components/ui/Button";
import { getCurrentUser, logout } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// export const metadata = {
//   title: "Quick Hire Dashboard",
//   description: "Find your jobs here",
// };

const DashboardLandingPage = () => {
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

  console.log(user)

  const handleLogout = async () => {
    await logout(); 
    setUser(null);
    toast.success("Logged out successfully");
    router.push("/login");
    router.refresh();
  };

  return (
    <div>
      dashboard data:
      
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default DashboardLandingPage;
