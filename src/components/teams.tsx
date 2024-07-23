"use client";
import { DotBackgroundDemo } from "@/components/ui/dotted-bg";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

let teams = [
  {
    image: "/teams/amaan.png",
    name: "Amaan Khan",
    designation: "Co-Founder & CEO",
  },
  {
    image: "/teams/faizer.png",
    name: "Faizer Shaikh",
    designation: "Co-Founder & CTO",
  },
  {
    image: "/teams/yasin.png",
    name: "Yasin Ansari",
    designation: "Co-Founder & Director of <br /> Development",
  },
  {
    image: "/teams/tabish.png",
    name: "Tabish Ansari",
    designation: "Co-Founder & CPO",
  },
];

export function Teams({}: Props) {
  return (
    <motion.section
      id='teams'
      initial={{
        opacity: 0,
        y: "20px",
      }}
      whileInView={{
        opacity: 1,
        y: "0px",
      }}
      transition={{
        duration: 0.1,
        ease: "easeIn",
      }}
      viewport={{
        once: true,
      }}
      style={
        {
          boxShadow:
            "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 5px rgba(45, 74, 170, 0.14)",
        } as any
      }
      className='container rounded-2xl my-[120px] p-10 bg-background z-10 relative mx-auto'
    >
      <DotBackgroundDemo>
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
          <h2 className='text-center text-4xl font-semibold text-primary mt-5'>
            Meet the Minds Driving Our Mission Forward
          </h2>
          <p className='text-gray-500 text-sm text-center mt-2 mb-10'>
            Meet the Visionaries Driving Our Mission with Passion, Experience,
            and <br />
            Unwavering Commitment.
          </p>
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
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4'>
            {teams.map((item) => (
              <div
                key={item.name}
                className='flex flex-col gap-3 p-5 rounded-lg items-center'
              >
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.name}
                  style={{ borderRadius: "100%" }}
                  className='!min-h-[200px] !min-w-[200px] object-cover'
                />
                <div>
                  <h4 className='text-center font-semibold text-primary'>
                    {item.name}
                  </h4>
                  <p
                    className='text-center m-0 text-gray-500 text-sm'
                    dangerouslySetInnerHTML={{ __html: item.designation }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <p className='text-gray-500 text-center mb-5'>
          Other Core Team Members:{" "}
          <span className='font-semibold text-primary'>Aatif Syed</span>,
          Consulting Product Designer
        </p>
      </DotBackgroundDemo>
    </motion.section>
  );
}
