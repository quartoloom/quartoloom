import Image from "next/image";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className='flex mx-auto container justify-between items-end mb-5'>
      <div className='flex flex-col'>
        <Image
          src={"/logo-full.png"}
          height={40}
          width={180}
          alt='Compnay Identity'
        />
        <h3 className='text-base font-medium text-gray-500'>
          Where Education Meets Innovation and Creativity.
        </h3>
      </div>
      <p className='text-gray-500 text-sm'>
        Copyright © 2024 Quartoloom. All Rights Reserved.
      </p>
    </footer>
  );
};
