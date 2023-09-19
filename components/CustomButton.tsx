"use client";
import { customButtonProps } from '@/types/index';
import React from 'react'
import Image from '/next/image';
const CustomButton = ({ btnType,title, containerStyles, textStyles, handleClick}: customButtonProps) => {
  return (
   <button 
   disabled={false}
   type={ btnType ||"button"}
   className={`custom-btn ${containerStyles}`}
   onClick ={handleClick}
   >
      <span className={`flex-1 ${textStyles}`} >
        {title}
      </span>
   </button>
  )
}

export default CustomButton