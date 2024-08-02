"use client";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Phone, Spinner } from "@phosphor-icons/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import { sendContactUsMail } from "@/app/actions";

export const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (
        !data.name ||
        !data.lastName ||
        !data.email ||
        !data.phone ||
        !data.message
      ) {
        setLoading(false);
        toast.error("Please enter data in all fields");
        return false;
      }

      await sendContactUsMail(data);
      setLoading(false);
      toast.success(
        `Thank you for your interest ${data.name}! We will get back to you soon!`
      );
      setData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      return true;
    } catch (error) {
      setLoading(false);
      toast.error("Ooops! unfortunately some error has occurred.");
    }
  };

  return (
    <section className='container mx-auto my-[120px]' id='contact'>
      <div className='p-10 rounded-2xl from-primary/10 via-primary/05 to-background bg-gradient-to-b md:w-[70%] md:mx-auto w-full'>
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
            className='grid grid-cols-1 md:grid-cols-2 gap-5'
          >
            <div className='flex flex-col'>
              <label
                htmlFor='#name'
                className='text-slate-600 font-medium text-sm mb-1 pl-1'
              >
                First Name
                <span className='text-red-600'>*</span>
              </label>
              <input
                value={data["name"]}
                name='name'
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                id='name'
                className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
                placeholder='Name'
                type='text'
              />
            </div>
            <div className=' flex flex-col'>
              <label
                htmlFor='#lastname'
                className='text-slate-600 font-medium text-sm mb-1 pl-1'
              >
                Last Name
                <span className='text-red-600'>*</span>
              </label>
              <input
                value={data["lastName"]}
                name='lastName'
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                id='lastname'
                className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
                placeholder='Last Name'
              />
            </div>

            <div className=' flex flex-col'>
              <label
                htmlFor='#email'
                className='text-slate-600 font-medium text-sm mb-1 pl-1'
              >
                Email
                <span className='text-red-600'> *</span>
              </label>
              <input
                value={data["email"]}
                name='email'
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                id='email'
                className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
                placeholder='Email'
                type='email'
              />
            </div>
            <div className=' flex flex-col'>
              <label
                htmlFor='#phone'
                className='text-slate-600 font-medium text-sm mb-1 pl-1'
              >
                Phone Number
                <span className='text-red-600'>*</span>
              </label>
              <input
                value={data["phone"]}
                name='phone'
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                id='phone'
                className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
                placeholder='phone'
              />
            </div>
            <div className=' flex flex-col col-span-1 md:col-span-2'>
              <label
                htmlFor='#message'
                className='text-slate-600 font-medium text-sm mb-1 pl-1'
              >
                Message
                <span className='text-red-600'>*</span>
              </label>
              <textarea
                value={data["message"]}
                name='message'
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                id='message'
                className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm col-span-2'
                placeholder='Type your message'
                cols={100}
                rows={3}
              ></textarea>
            </div>
            <div className=' col-span-1 md:col-span-2 flex justify-center items-center'>
              <Button disabled={loading} onClick={(e) => handleSubmit(e)}>
                {loading && (
                  <Spinner
                    className='mr-2 h-4 w-4 animate-spin text-inherit'
                    fontSize={18}
                  />
                )}
                Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <Toaster position='bottom-center' richColors />
    </section>
  );
};
