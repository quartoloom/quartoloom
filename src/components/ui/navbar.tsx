"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";
import { CalendarIcon } from "@radix-ui/react-icons";
let navItems: {
  name: string;
  link: string;
  icon?: JSX.Element;
}[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Team",
    link: "/",
  },
  {
    name: "Fetaures",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Connect Us",
    link: "/",
  },
];
export const Navbar = ({ className }: { className?: string }) => {
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <motion.nav
      initial={{
        opacity: 0,
        top: "-0px",
      }}
      animate={{
        opacity: 1,
        top: "15px",
      }}
      transition={{
        duration: 0.1,
        delay: 0,
        ease: "easeIn",
      }}
      className={cn(
        "flex fixed inset-x-0 mx-auto rounded-full !transform-none container px-5 backdrop-blur-sm z-[1000]"
      )}
    >
      <header className='flex items-center justify-between py-1 h-14  w-full'>
        <div className='flex justify-start items-center gap-3'>
          <Image
            src={"/logo-full.png"}
            height={40}
            width={150}
            alt='Compnay Identity'
          />
          <ul className='flex justify-start items-center gap-4 ml-5'>
            {navItems.map((item) => (
              <li
                aria-label={`${item.name} navigation item`}
                key={item.name}
                className={cn(
                  "cursor-pointer text-sm text-gray-500 hover:text-primary hover:font-semibold",
                  {
                    "text-primary font-semibold": selectedItem === item.name,
                  }
                )}
                onClick={() => setSelectedItem(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-end items-center gap-5'>
          <Button
            variant={"ghost"}
            className='rounded-full'
            aria-label='Register button'
          >
            Register
          </Button>
          <Button className='rounded-full' aria-label='Book a demo button'>
            <CalendarIcon className='mr-2 size-4' />
            Book a Demo
          </Button>
        </div>
      </header>
    </motion.nav>
  );
};
