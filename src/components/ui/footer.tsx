import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className='flex mx-auto container justify-between items-end gap-10 mb-5'>
      <div className='flex flex-col'>
        <Image
          src={"/logo-full.png"}
          height={70}
          width={200}
          alt='Compnay Identity'
          className='md:h-[70px] md:w-[200px] h-[25px] w-[140px] mb-1'
          // className='md:h-10 md:w-48 !h-7 w-36'
        />
        <h3 className='font-medium text-gray-500 md:text-base text-[10px]'>
          Where Education Meets Innovation and Creativity.
        </h3>
      </div>
      <p className='text-gray-500 md:text-sm text-[10px]'>
        Copyright © 2024 Quartoloom. All Rights Reserved.
      </p>
    </footer>
  );
};
