"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Banner() {
  const textMotion = "Welcome to Prince Product";
  const h1variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const spanvariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <section className="text-white mb-20 h-[100vh]">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="bg-gradient-to-r from-green-300 via-vred to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            variants={h1variants}
            initial="hidden" 
            animate="visible"
          >
            {textMotion.split("").map((ele, index) => {
              return (
                <motion.span variants={spanvariants}
                key={index}>
                  {ele}
                </motion.span>
              );
            })}
            <span className="sm:block"> Online shop. </span>
          </motion.h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            It has all the products you need, from patents to patents. For this
            reason, do not hesitate to contact us at any time. We are available
            to you 24 hours a day.!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-vred bg-vred px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/product"
            >
              Our Products
            </Link>

            <Link
              className="block w-full rounded border border-vred px-12 py-3 text-sm font-medium text-white hover:bg-vred focus:outline-none focus:ring active:bg-vred sm:w-auto"
              href="/cart"
            >
              Your Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
