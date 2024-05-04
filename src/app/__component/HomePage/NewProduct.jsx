"use client";

import { ProductFetch } from "@/app/rtk/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Link from "next/link";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
export default function NewProduct() {
  const [scrolling, setScrolling] = useState(false);
  const handdleScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 700) {
        return setScrolling(true);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handdleScroll);

    return () => window.removeEventListener("scroll", handdleScroll);
  }, []);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(ProductFetch());
  }, []);
  if (product?.length > 0) {
    return (
      <motion.div
        className="NewProduct text-white mt-20"
        initial={{ y: 800, opacity: 0 }}
        animate={scrolling == true ? { y: 0, opacity: 1 } : null}
        transition={{ duration: 0.4 }}
      >
        <h1 className="m-4 p-3 lg:text-3xl sm:text-2xl first-letter:text-vred first-letter:font-bold">
          New Products
        </h1>
        <div
          className="CardNewProduct  text-black w-[100%] 
              flex flex-wrap justify-evenly
              "
        >
          {product?.slice(0, 4).map((ele) => {
            return (
              <div
                className="h-[500px] 
                      m-10
                        flex flex-col items-center 
                        rounded-md relative carding bg-white after:bg-lred after:text-vred
                        lg:w-[350px]
                        md:w-[350px]
                        sm:w-[350px]
                        w-[90%]
                        "
                key={ele.id}
              >
                <img
                  className="mt-2 z-30
                            lg:w-[300px]
                        md:w-[300px]
                        sm:w-[300px]
                        w-[90%] h-[280px] object-cover"
                  src={ele.images[0]}
                />
                <div
                  className="text flex flex-col justify-center items-center p-3 z-30
                text-black
                "
                >
                  <h1 className="font-bold text-3xl p-3 text-gray-500">
                    {ele.title}
                  </h1>
                  <h3 className="line-clamp-1 tetx text-gray-500">
                    {ele.description}...
                  </h3>
                  <Link
                    className="inline-block rounded
                          mt-10
                          bg-vred px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-vred"
                    href="#"
                  >
                    Check
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  } else {
    return (
      <center>
        <Loader />
      </center>
    );
  }
}
