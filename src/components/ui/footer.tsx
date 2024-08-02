import Image from "next/image";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className='flex mx-auto container justify-between items-end mb-5'>
      <div className='flex flex-col'>
        <Image
          src={"/logo-full.png"}
          height={70}
          width={200}
          alt='Compnay Identity'
          // className='md:h-10 md:w-48 !h-7 w-36'
        />
        <h3 className='font-medium text-gray-500 md:text-base text-xs'>
          Where Education Meets Innovation and Creativity.
        </h3>
      </div>
      <p className='text-gray-500 md:text-sm text-xs'>
        Copyright © 2024 Quartoloom. All Rights Reserved.
      </p>
    </footer>
  );
};
