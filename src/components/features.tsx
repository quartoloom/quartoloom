"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IdentificationCard,
  IntersectSquare,
  Student,
  UsersFour,
} from "@phosphor-icons/react";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// const Skeleton = () => (
//   <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
// );

let cards: {
  name: string;
  description: string;

  className?: string;
  header: ReactNode;
  icon: ReactNode;
}[] = [
  {
    name: "Admission and Online Payment <br/> Management",
    description:
      "Simplify enrollment with online applications, secure document storage, and automated notifications, while enabling convenient, secure fee payments with real-time tracking and digital receipts for seamless financial and admission processes.",
    header: (
      <div className='w-full h-[300px] relative'>
        <Image
          src={"/features/feature1.png"}
          className='rounded-xl object-cover'
          alt='Admission and Online Payment Management'
          fill
        />
      </div>
    ),
    icon: (
      <div className='flex justify-center items-center p-2 bg-secondary rounded-full'>
        <IdentificationCard className='size-6 text-primary' />
      </div>
    ),
  },
  {
    name: "Student and Teacher<br/> Profile Management",
    description:
      "Maintain comprehensive profiles for students and teachers, monitor academic progress and performance, manage schedules and professional development, and facilitate seamless communication to enhance educational quality and administrative efficiency.",
    header: (
      <div className='w-full h-[300px] relative'>
        <Image
          src={"/features/feature2.png"}
          className='rounded-xl object-cover'
          alt='Student and Teacher Profile Management'
          fill
        />
      </div>
    ),
    icon: (
      <div className='flex justify-center items-center p-2 bg-secondary rounded-full'>
        <Student className='size-6 text-primary' />
      </div>
    ),
  },
  {
    name: "Classroom, Attendance, Results, and Announcements Management",
    description:
      "Enhance classroom efficiency with organized scheduling and student grouping, track and report attendance, manage exam results, generate progress reports, and quickly send important announcements, ensuring effective communication and optimized learning environments.",
    header: (
      <div className='w-full h-[600px] relative'>
        <Image
          src={"/features/feature3.png"}
          className='rounded-xl object-contain'
          alt='Classroom, Attendance, Results, and Announcements Management'
          fill
        />
      </div>
    ),
    icon: (
      <div className='flex justify-center items-center p-2 bg-secondary rounded-full'>
        <UsersFour className='size-6 text-primary' />
      </div>
    ),
    className: "row-span-1 lg:row-span-2",
  },
  {
    name: "Bulk Data Upload and Existing ERP <br/> Integration",
    description:
      "Streamline data management with bulk uploads for attendance, results, and student information, ensuring data consistency and quick updates, while seamlessly integrating with existing ERP systems for a unified and efficient school management experience.",
    header: (
      <div className='w-full h-[400px] relative'>
        <Image
          src={"/features/feature5.png"}
          className='rounded-xl object-cover'
          alt='Bulk Data Upload and Existing ERP Integration'
          fill
        />
      </div>
    ),
    icon: (
      <div className='flex justify-center items-center p-2 bg-secondary rounded-full'>
        <IntersectSquare className='size-6 text-primary' />
      </div>
    ),
    className: "col-span-1 lg:col-span-2",
  },
];

export function Features() {
  return (
    <section className='container mx-auto my-[120px]' id='features'>
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
          duration: 0.3,
          ease: "easeIn",
          delay: 0.1,
        }}
      >
        <h2 className='text-center text-4xl font-semibold text-primary mt-5'>
          Here's What We Offer for Your School
        </h2>
        <p className='text-gray-500 text-sm text-center mt-2 mb-16'>
          Explore the essential features designed to streamline operations,
          enhance communication,
          <br /> and improve administrative efficiency.
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
        className='h-max'
      >
        <BentoGrid>
          {cards.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.name}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className ? item.className : ""}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
}
