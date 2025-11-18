"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  X,
  Monitor,
  Menu,
} from "lucide-react";

export default function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productCategories = [
    {
      title: "Audio Products",
      items: [
        {
          name: "Microphones & Speakers",
          href: "/product/Microphones%20&%20Speakers",
        },
        { name: "MTR Devices", href: "/product/MTR%20Devices" },
      ],
    },
    {
      title: "Display & Video",
      items: [
        {
          name: "Wireless Display Extenders",
          href: "/product/Wireless%20Display%20Extenders",
        },
        { name: "Webcams", href: "/product/Webcams" },
      ],
    },
    {
      title: "Power",
      items: [
        { name: "GAN Power Adapters", href: "/product/GAN%20Power%20Adapters" },
      ],
    },
  ];

  const supportMenu = [
    { name: "Contact Us", href: "/contact" },
    { name: "Check Warranty", href: "/warranty" },
    { name: "Register Complaint", href: "/register-complaint" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                BlueJay<span className="text-blue-600">Labs</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Innolabs Pvt Ltd</p>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent className="p-3 w-40">
                  <div className="flex flex-col space-y-2">
                    <Link href="/">Home</Link>
                    <Link href="/#services">Services</Link>
                    <Link href="/#top-products">Top Products</Link>
                    <Link href="/#contact">Contact</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 w-[750px]">
                  <div className="grid grid-cols-3 gap-6">
                    {productCategories.map((cat) => (
                      <div key={cat.title}>
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">
                          {cat.title}
                        </h3>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-1/2 -translate-x-1/2 top-full bg-white border border-gray-200 rounded-xl shadow-xl">
                  <div className="flex flex-col space-y-2">
                    {supportMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-3 py-2 rounded-md hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <div className="flex items-center space-x-6">
                <Link href="/aboutus" className="hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
              </div>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-gray-700" />
            <Heart className="w-5 h-5 text-gray-700" />
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <User className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
}