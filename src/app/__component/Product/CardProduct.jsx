"use client";
import { ProductFetch } from "@/app/rtk/productSlice";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CardProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(ProductFetch());
  }, []);
 const param = usePathname()
 const Pcheck = param.split("/")[1]
  return product?.map((ele) => {
    return (
      <Link
        href={Pcheck == 'product'?`/product/${ele.id}`:`product/${ele.id}`}
        className="group block lg:w-[350px] mt-10
        md:w-[350px] sm:w-[3500px] w-[100%]  
                   "
        key={ele.id}
      >
        <img
          src={ele?.images[0]}
          alt=""
          className="h-[350px] rounded-md w-full object-cover sm:h-[450px]"
        />

        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3
              className="text-white group-hover:underline group-hover:underline-offset-4 border-vred
                            "
            >
              {ele?.title}
            </h3>

            <p className="mt-1.5 text-pretty text-xs text-gray-300">
              {ele?.description}
            </p>
          </div>

          <p className="text-vred">${ele?.price}</p>
        </div>
      </Link>
    );
  });
}
