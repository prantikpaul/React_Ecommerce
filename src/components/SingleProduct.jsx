import React from 'react'
import bb from "../assets/images/product/bb.webp";
import { ShoppingBasket, Star } from 'lucide-react';

export default function SingleProduct() {
  return (
    <>
      <div className='lg:mx-48 lg:m-10 lg:flex '>
        <div>
        <div className=' border border-gray-400 flex flex-col items-center mt-2 mx-5 h-[324px] w-[349px]  lg:h-[442px] lg:w-[476px]'>
            <img src={bb} alt="" className='' />
        </div>
        <div className='flex ml-5 gap-2 mt-2 w-auto lg:h-[105px] lg:w-[488px] '>
            <div className=' border border-gray-400'>
                <img src={bb} alt="" className='h-[74px] w-[79px] lg:h-[103px] lg:w-[111px]'/>
            </div>
            <div className=' border border-gray-400'>
                <img src={bb} alt="" className='h-[74px] w-[79px] lg:h-[103px] lg:w-[111px]' />
            </div>
            <div className=' border border-gray-400'>
                <img src={bb} alt="" className='h-[74px] w-[79px] lg:h-[103px] lg:w-[111px]' />
            </div>
            <div className=' border border-gray-400'>
                <img src={bb} alt="" className='h-[74px] w-[79px] lg:h-[103px] lg:w-[111px]' />
            </div>

        </div>
        </div>

        <div>
        <div>
            <h1 className='text-balance text-2xl ml-5 font-bold mt-5 lg:text-4xl '>
            MacBook Pro 13’’ 2022 M2 10Core 16/256GB(macbook 10 core) | Silver </h1>
        </div>
        <div className='flex ml-5 mt-3 gap-1 '>
            <Star size={18} />
            <Star size={18}/>
            <Star size={18}/>
            <Star size={18}/>
            <Star size={18}/>
            <p className='text-sm'>( There are no reviews yet. )</p>
        </div>
        <div>
            <p className='text-4xl font-bold ml-5 mt-3'>৳ 169999</p>
        </div>
        <div className='ml-5 mt-3 w-10/12'>
            <p className='text-sm'>
            256GB | International (physical+e sim)(iphone 15) | Blue Titanium ৳169999 The iPhone 15 Pro Max is the most powerful and advanced iPhone yet, with a stunning Super Retina XDR display with ProMotion, the powerful A17 Bionic chip, an advanced Pro-Grade Camera System for stunning results.
            </p>
        </div>
        <div className='flex mt-3 items-center ml-2'>
            <div className='flex m-3 items-center'>
                <div className='border border-gray-400 h-8 w-6 text-center cursor-pointer py-1'>-</div>
                <div className='border border-gray-400 h-8 w-8 text-center py-1'>1</div>
                <div className='border border-gray-400 h-8 w-6 text-center cursor-pointer py-1'>+</div>
            </div>
            <div className='flex bg-slate-400 py-2 w-36 px-1 items-center h-12'>
            <ShoppingBasket />
            <button type="button"> ADD TO CART</button>
            </div>
        </div>
        <div></div>
        <div></div>
        </div>
        <div></div>
        <div></div>
      </div>

    </>
  )
}
