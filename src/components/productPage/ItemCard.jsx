"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const ItemCard = (props) => {
  const router = useRouter();
  return (
    <>
    
    <div className="itemCard m-4 flex w-68 h-64 flex-col bg-white" onClick={()=>router.push(`/products/${props.id}`)} >
        <div className="cardImage flex justify-center h-48 w-3/5 m-auto  ">
            <Image
            src={props.image}
            width={100}
            height={100}
            alt='images'
            className='object-contain w-full'
            
            />
        </div>
        <div className="cardText flex flex-col justify-between mx-2 text-[#413E65] ">
            <p className="title py-1  overflow-hidden text-xs font-bold flex h-10" >{props.title}</p>
            <p className="price">${props.price}</p>
        </div>
    </div>
    
    </>
  )
}

export default ItemCard