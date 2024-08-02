"use client";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { Check, TrendUp } from "@phosphor-icons/react";
import { Sparkle } from "@phosphor-icons/react/Sparkle";
import React from "react";
import { motion } from "framer-motion";
import { BookAMeeting } from "./book-a-meeting";
type Props = {};

const pricingCards = [
  {
    label: "Starter",
    price: "150₹",
    for: "For starter schools",
    icon: <TrendUp className='text-primary size-5' />,
    features: [
      {
        label: "Admission & Enquiries Management",
        included: true,
      },
      {
        label: "Student App",
        included: true,
      },
      {
        label: "Content Management",
        included: true,
      },
      {
        label: "Email Notifications",
        included: true,
      },
    ],
    recomanded: false,
  },
  {
    label: "Pro",
    price: "220₹",
    for: "For small to large schools",
    features: [
      {
        label: "Everything in Starter +",
        included: true,
      },
      {
        label: "Student & Teacher Management",
        included: true,
      },
      {
        label: "Classroom, Announcements Management",
        included: true,
      },
      {
        label: "Student & Teacher App",
        included: true,
      },
      {
        label: "Automatic ID Card, Bonafide, LC genration",
        included: true,
      },
      {
        label: "Email Notifications",
        included: true,
      },
      {
        label: "24/7 customer support",
        included: true,
      },
    ],
    recomanded: true,
  },
  {
    label: "Advance",
    price: "250₹",
    for: "For small to large schools",
    features: [
      {
        label: "Everything in Pro +",
        included: true,
      },
      {
        label: "Student, Teacher Attendance",
        included: true,
      },
      {
        label: "Advanced analytics",
        included: true,
      },
      {
        label: "School Directory",
        included: true,
      },
      {
        label: "24/7 customer support",
        included: true,
      },
    ],
    recomanded: false,
  },
];

export function Pricing({}: Props) {
  return (
    <section className='container mx-auto mb-[120px] mt-[150px]' id='pricing'>
      <div className='[--color:hsl(var(--primary))] pointer-events-none relative -z-[2] mx-auto h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,hsl(var(--primary)),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--primary)))] after:bg-background'></div>

      <div className='mb-10 flex items-center flex-col w-full'>
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
          className='flex items-center flex-col w-full'
        >
          <HoverBorderGradient
            containerClassName='rounded-full'
            as='button'
            className='dark:bg-black bg-background text-primary flex items-center space-x-2'
          >
            <Sparkle />
            <span>Pricing</span>
          </HoverBorderGradient>
          <h2 className='text-center text-4xl font-semibold text-primary mt-5'>
            Simple pricing for school.
          </h2>
          <p className='text-gray-500 text-sm text-center mt-2 mb-16'>
            Choose an affordable plan that's packed with the best features for
            managing your school,
            <br />
            students, and classrooms.
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
            delay: 0.3,
          }}
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'
        >
          {pricingCards.map((item) => (
            <div key={item.label}>
              <div
                className={cn(
                  "p-5 h-full flex flex-col items-start gap-7 justify-between rounded-2xl border hover:shadow-xl transition-shadow",
                  {
                    "border-primary": item.recomanded,
                  }
                )}
              >
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between items-center'>
                    <p className='text-primary font-semibold text-xl'>
                      {item.label}
                    </p>
                    {/* {item.icon} */}
                  </div>
                  <div className='flex justify-start items-center gap-4'>
                    <h6 className='bg-gradient-to-r from-slate-600 to-slate-300 bg-clip-text text-transparent text-4xl font-semibold'>
                      {item.price}
                    </h6>
                    <span className='!text-gray-400 text-base'>
                      /Student <br /> for a Year
                    </span>
                  </div>
                  <p className='text-gray-400 text-sm border-b pb-2'>
                    {item.for}
                  </p>
                  <ul className='flex flex-col gap-2 my-5'>
                    {item.features.map((feat) => (
                      <li
                        className='flex justify-start items-center gap-4'
                        key={feat.label}
                      >
                        <Check className='size-4 text-primary' />
                        <div className='text-gray-500 text-sm'>
                          {feat.label}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <BookAMeeting
                  button={
                    <Button variant={item.recomanded ? "default" : "ghost"}>
                      Get Started
                    </Button>
                  }
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
