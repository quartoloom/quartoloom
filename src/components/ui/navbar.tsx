"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useScrollDirection } from "@/hooks";
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
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed top-5 inset-x-0 mx-auto rounded-full !transform-none container px-5 transition-all delay-[50ms] backdrop-blur-sm z-[1000]"
        )}
      >
        <header className='flex items-center justify-between py-1 h-14  w-full'>
          <div className='flex justify-start items-center gap-3'>
            {/* <Image
              src={"/logo.png"}
              height={24}
              width={24}
              alt='Compnay Identity'
            ></Image>
            <h4 className='text-primary font-semibold text-base uppercase'>
              QUARTOLOOM
            </h4> */}
            <Image
              src={"/logo-full.png"}
              height={40}
              width={150}
              alt='Compnay Identity'
            />
            <ul className='flex justify-start items-center gap-4 ml-5'>
              {navItems.map((item) => (
                <li
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
            <Button variant={"ghost"} className='rounded-full'>
              Register
            </Button>
            <Button className='rounded-full'>
              <CalendarIcon className='mr-2 size-4' />
              Book a Demo
            </Button>
          </div>
        </header>
      </motion.div>
    </AnimatePresence>
  );
};
