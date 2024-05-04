"use client";
import { motion } from "framer-motion";
import CardProduct from "./CardProduct";
import { useEffect, useState } from "react";

export default function ProductDiv() {
  const [scolling, setScrolling] = useState(false);
  const scrollcheck = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        console.log("Good");
        setScrolling(true);
        console.log(scolling);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollcheck);
    return () => window.removeEventListener("scroll",scrollcheck);
  }, []);
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={scolling == true ? { y: 0, opacity: 1 } : null}
      className="ProductDiv mt-20 p-4"
    >
      <div className="product text-white flex justify-end">
        <h1
          className="lg:text-4xl
            md:text-3xl sm:text-3xl text-2xl
            font-bold tracking-[4px] first-letter:text-vred p-10"
        >
          Our Products
        </h1>
      </div>
      <div
        className="product flex flex-wrap
         justify-evenly p-4 gap-10 my-20 
        "
      >
        <CardProduct />
      </div>
    </motion.div>
  );
}
