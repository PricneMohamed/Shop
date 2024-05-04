"use client"
import { addCart } from "@/app/rtk/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Flip, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Detailsbtn(props) {
  const product = props.ele;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addCart(product));
    toast.success(`${props.name} added to cart`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        });
  };

  return (
    <button
      onClick={handleClick}
      className="mt-8 inline-block rounded border border-gray-200 bg-vred hover:bg-red-700 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
    >
      Add To Cart
    </button>
  );
}
