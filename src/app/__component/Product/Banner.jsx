"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Banner() {
  const h2variants = {
    "hidden": {
      opacity: 0,
    },
    "visible": {
      opacity: 1,
      transition:{
        staggerChildren:0.1
      }
    },
  };
  const spanvariants = {
    "hidden": {
      opacity: 0,
    },
    "visible": {
      opacity: 1,
    },
  };
  const text = "Welcome to Product Section"
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 mt-10 h-[100vh]">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <motion.h2
            variants={h2variants}
            initial={"hidden"}
            animate={"visible"}
            className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-300 via-vred to-purple-600 bg-clip-text md:text-3xl"
          >
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

          <p className=" text-white md:mt-4">
            Welcome to Link unique shopping world where everything you need is
            at your fingertips. We offer you an easy and secure shopping
            experience, with Link wide range of trendy products. Enjoy our
            exclusive offers and exceptional customer service that meets all
            your needs. Thank you for choosing our store, where your
            satisfaction always comes first.
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
              className="inline-block rounded bg-vred px-12 py-3 text-sm font-medium text-white transition hover:bg-vred/75 focus:outline-none focus:ring focus:ring-vred/75"
            >
              Our Product
            </button>
          </div>
        </div>
      </div>

      <Image
        alt=""
        src={require("./wallpaperflare.com_wallpaper.jpg")}
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
}
