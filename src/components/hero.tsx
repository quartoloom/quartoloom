"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Div } from "@/components/ui/moving-border";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { BookAMeeting } from "./book-a-meeting";

let schools = [
  {
    name: "Oakridge International School",
    logo: "/schools/oak.png",
  },
  {
    name: "Delhi public School",
    logo: "/schools/dps1.png",
  },
  {
    name: "k-tech School",
    logo: "/schools/k-tech.jpeg",
  },
  {
    name: "pmet School",
    logo: "/schools/pmet.png",
  },
];
type Props = {};

export function Hero({}: Props) {
  return (
    <section className=''>
      <div className='container relative mx-auto mt-28 md:mt-44 max-w-[80rem] px-6 text-center md:px-8 z-10'>
        <motion.div
          initial={{
            opacity: 0,
            y: "10px",
          }}
          animate={{
            opacity: 1,
            y: "0px",
          }}
          transition={{
            duration: 0.2,
            ease: "easeIn",
          }}
        >
          <h1 className='bg-gradient-to-br dark:from-primary from-primary from-30% dark:to-white/40 to-secondary bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-5xl lg:text-8xl translate-y-[-1rem] text-center'>
            Revolutionize Your School
            <br className='hidden md:block' /> with Quartoloom.
          </h1>
          <p className='mb-12 text-lg tracking-tight text-gray-500 md:text-xl text-balance'>
            A Comprehensive Solution for Administrators, Teachers, Students, and
            Parents. Manage Every Aspect of School Operations from One
            User-Friendly Platform.
          </p>
          <BookAMeeting
            button={
              <Button>
                Get Started for Free <ArrowRightIcon className='ml-3 size-4' />
              </Button>
            }
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: "10px",
          }}
          animate={{
            opacity: 1,
            y: "0px",
          }}
          transition={{
            duration: 0.2,
            ease: "easeIn",
            delay: 0.1,
          }}
          className='my-[120px]'
        >
          <Div
            containerClassName='max-w-[1300px] max-h-[700px] mx-auto'
            className='w-full h-full z-10 relative after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background)),transparent)] after:rounded-2xl before:absolute before:-bottom-3 before:w-full before:h-12 before:bg-background before:z-[500]'
          >
            {/* <img
              src={"/app.webp"}
              className='w-full h-auto rounded-2xl border-[3px] border-gary-300 object-cover max-w-[1300px] max-h-[700px]'
            /> */}
            <Image
              width={1300}
              height={700}
              src={"/app.webp"}
              className='w-full h-auto rounded-2xl border-[3px] border-gary-300'
              alt='App preview'
              loading='lazy'
              // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            ></Image>
          </Div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: "50px",
          }}
          whileInView={{
            opacity: 1,
            y: "0px",
          }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className='flex justify-center flex-col gap-5 mb-[120px]'>
            <p className='capitalize text-base text-gray-500'>
              TRUSTED BY SCOOLS FROM AROUND THE INDIA
            </p>
            <div className='flex justify-center items-center gap-20 mt-10'>
              {schools.map((school) => (
                <div
                  className='flex justify-center items-center h-20 relative w-20'
                  key={school.name}
                >
                  <Image
                    src={school.logo}
                    alt={school.name}
                    width={80}
                    height={80}
                  ></Image>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
