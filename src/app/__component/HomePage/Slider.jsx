"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { ProductFetch } from "@/app/rtk/productSlice";

export default function Slider() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(ProductFetch());
  }, []);
  console.log(product);
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-32 mb-20"
      >
        {product?.map((ele) => {
          return (
            <SwiperSlide key={ele.id}>
                <img
                className="w-[70px]"
                src={ele.images[0]} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
