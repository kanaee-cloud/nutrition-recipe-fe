"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const toLogin = () => {
    window.location.href = "/login";
  }

  const toRegister = () => {
    window.location.href = "/register"
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-black/70 m-2 py-4" : "bg-black/50 p-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white font-semibold text-lg">Recipe</div>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4  rounded-md min-w-[250px] md:min-w-[400px]">
                <NavigationMenuLink className="text-white block p-2">
                  Home
                </NavigationMenuLink>
                <NavigationMenuLink className="text-white block p-2">
                  About
                </NavigationMenuLink>
                <NavigationMenuLink className="text-white block p-2">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                Documentation
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4  rounded-md min-w-[250px] md:min-w-[400px]">
                <NavigationMenuLink className="text-white block p-2">
                  Docs
                </NavigationMenuLink>
                <NavigationMenuLink className="text-white block p-2">
                  API
                </NavigationMenuLink>
                <NavigationMenuLink className="text-white block p-2">
                  Support
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-x-2">
          <Button
            variant="default"
            className=" border  text-black bg-white  rounded-lg"
            onClick={toLogin}
          >
            Login
          </Button>
          <Button variant="outline" className=" border  text-white rounded-lg" onClick={toRegister}>
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}
