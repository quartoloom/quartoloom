"use client";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Phone } from "@phosphor-icons/react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export const ContactUs = (props: Props) => {
  return (
    <section className='container mx-auto my-[120px]'>
      <div className='p-10 rounded-2xl from-primary/10 via-primary/05 to-background bg-gradient-to-b w-[70%] mx-auto'>
        <div className='flex flex-col gap-5 items-center'>
          <motion.div
            initial={{
              opacity: 0,
              top: "-100px",
            }}
            whileInView={{
              opacity: 1,
              top: "0px",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
              delay: 0.1,
            }}
            className='flex flex-col items-center gap-5'
          >
            <HoverBorderGradient
              containerClassName='rounded-full'
              as='button'
              className='dark:bg-black bg-background text-primary flex items-center space-x-2'
            >
              <Phone />
              <span>Need help?</span>
            </HoverBorderGradient>
            <h2 className='text-center text-4xl font-semibold text-primary mt-5'>
              Get in Touch with Quartoloom
            </h2>
            <p className='text-gray-500 text-sm text-center mt-2 mb-10'>
              We're Here to Help with Your School Management Needs
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              top: "-100px",
            }}
            whileInView={{
              opacity: 1,
              top: "0px",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
              delay: 0.2,
            }}
            className='grid grid-cols-2 gap-5'
          >
            <div className=' flex flex-col'>
              <label
                htmlFor='#name'
                className='text-slate-600 font-medium text-sm mb-1 pl-1'
              >
                Name
                <span className='text-red-600'>*</span>
              </label>
              <input
                id='name'
                className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
                placeholder='Name'
                type='text'
              />
            </div>
            <div className=' flex flex-col'>
              <label
                htmlFor='#email'
                className='text-slate-600 font-medium text-sm mb-1 pl-1'
              >
                Email
                <span className='text-red-600'>*</span>
              </label>
              <input
                id='email'
                className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
                placeholder='Email'
                type='email'
              />
            </div>
            <div className=' flex flex-col col-span-2'>
              <label
                htmlFor='#message'
                className='text-slate-600 font-medium text-sm mb-1 pl-1'
              >
                Message
                <span className='text-red-600'>*</span>
              </label>
              <textarea
                id='message'
                className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm col-span-2'
                placeholder='Type your message'
                cols={100}
                rows={3}
              ></textarea>
            </div>
            <div className='col-span-2 flex justify-center items-center'>
              <Button>Send Message</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
