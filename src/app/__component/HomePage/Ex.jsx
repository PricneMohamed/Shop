import Image from 'next/image'
import React from 'react'

export default function Ex() {
  return (
    <div className='Ex mt-32 flex text-white lg:p-28
    md:p-20
    sm:p-10
    p-5
    lg:justify-between justify-center gap-20 flex-row-reverse flex-wrap'>
        <Image 
        width={500}
        height={500}
        className="rounded-md m-auto"
        src={require("./undraw_undraw_undraw_undraw_undraw_undraw_shopping_bags_2ude_-1-_mnw3_-2-_q7y0_muk6_-2-_l1mh_(2)_1ihj.png")}
        alt='Prince Of Shopping'
        />
        <h2 className='lg:text-3xl
        md:text-3xl sm:text-2xl text-xxl w-[100%]  lg:w-[800px]
        text-wrap m-auto'>
        Welcome to Prince of shopping, your ultimate destination for all your shopping needs under one roof! We are here to provide you with an easy and enjoyable shopping experience, where you can choose from a wide range of excellent products. Feel free to explore our diverse sections and discover the latest offers and discounts specially tailored for you. We are always here to assist you in finding what you are looking for with the best quality and the lowest prices. We wish you a delightful and fruitful shopping experience!

        </h2>
    </div>
  )
}
