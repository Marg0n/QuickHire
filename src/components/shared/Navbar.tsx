/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import logo from "@/assets/images/Logo.png";
import Image from "next/image";
import Button from "../ui/Button";

const links = [
  { name: "Find Jobs", href: "/jobs" },
  { name: "Browse Companies", href: "/company" },
];

export default function Navbar() {
  //* mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-white shadow-sm border-b border-white/10">
      {/* Nametag / logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link href="/">
            <Image src={logo} alt="Quick Hire Logo" width={152} height={36} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800  relative group font-medium"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex justify-between items-center gap-6">
          <Link href={"login"}>
            <Button variant={2}>Login</Button>
          </Link>
          <Link href={"signup"}>
            <Button variant={1}>Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/70 dark:bg-black/60 backdrop-blur-md p-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-lg font-medium text-gray-900 dark:text-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href={"login"} className="block text-lg font-medium text-gray-900 dark:text-gray-100">
            <Button variant={2} className="w-full">Login</Button>
          </Link>
          <Link href={"signup"} className="block text-lg font-medium text-gray-900 dark:text-gray-100">
            <Button variant={1} className="w-full">Sign Up</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
