"use client"

import Link from "next/link"
import {motion} from "framer-motion"
export default function Banner() {
  const text = "Welcome to Cart Section"
  const h1variants ={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.1
      }
    }
  }
  const spanvariants ={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1
    }
  }
  return (
    <div className="Banner h-[100vh]">
<section className="overflow-hidden bg-transparent sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <motion.h2
      variants={h1variants}
      initial={"hidden"}
      animate={"visible"}
      className="text-2xl font-bold md:text-3xl
      bg-gradient-to-r from-green-300 via-vred to-purple-600 bg-clip-text text-transparent
      ">
        {text.split("").map((ele,index)=>{
          return(
            <motion.span
            variants={spanvariants}
            key={index}>
              {ele}
            </motion.span>
          )
        })}
      </motion.h2>

      <p className="hidden md:mt-4 md:block text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
        sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
        quisque ut interdum tincidunt duis.
      </p>

      <div className="mt-4 md:mt-8">
        <button
        onClick={
          ()=>{
            window.scrollTo({
              top:1000,
              behavior:"smooth"
            })
          }
        }
          className="inline-block rounded bg-vred px-12 py-3 text-sm font-medium text-white transition hover:bg-vred/95 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Go To Cart
        </button>
      </div>
    </div>
  </div>

  <img
    alt=""
    src="https://c4.wallpaperflare.com/wallpaper/949/222/509/shopping-cart-cat-white-animals-wallpaper-preview.jpg"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
    </div>
  )
}
