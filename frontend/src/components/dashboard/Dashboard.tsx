/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getCurrentUser, logout } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import ResponsiveSidebar from "./ResponsiveSidebar";

const Dashboard = () => {
 

  
  return (
    <div className="flex gap-2 h-screen">
      <div className="bg-red-500 h-full">
        <ResponsiveSidebar />
      </div>
      <div>
        something
      </div>
    </div>
  );
};

export default Dashboard;
