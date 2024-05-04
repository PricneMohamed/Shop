"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaOpencart } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const paramName = usePathname();
  const linking = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Cart", href: "/cart" },
    { name: "Contact", href: "https://portofolio-taupe-tau.vercel.app/" },
  ];
  let turn = 0;
  return (
    <header className="sticky top-0 backdrop-blur-md z-50 h-16">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-vred" href="#">
          <span className="sr-only">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="50"
            viewBox="0 0 32 32"
            style={{ fill: "#FA5252" }}
          >
            <path d="M 18.740234 6 C 18.218234 6 12.780203 6.0222031 12.283203 6.0332031 C 11.288203 6.0332031 10.576109 6.0228906 11.287109 6.8378906 C 11.689109 7.2828906 23.845578 21.083203 24.142578 21.408203 C 24.829578 22.180203 25.221187 22.038516 25.742188 21.853516 C 25.907187 21.799516 31.723797 19.594297 31.841797 19.529297 C 32.255797 19.323297 31.758609 18.736156 31.474609 18.410156 C 31.367609 18.302156 20.848469 6.739375 20.730469 6.609375 C 20.232469 6.033375 19.996234 6 18.740234 6 z M 13.455078 13 C 13.455078 13 12.854797 13.077375 12.216797 13.734375 C 11.762797 14.172375 0.19104688 24.617078 0.12304688 24.705078 C -0.22895313 25.187078 0.20420312 25.033969 0.90820312 24.792969 C 0.94220313 24.792969 5.6503906 23.310547 5.6503906 23.310547 C 5.6843906 23.277547 5.6495938 23.299344 5.6835938 23.277344 C 5.6615938 23.036344 5.6496719 22.030844 5.6386719 21.964844 C 5.6046719 21.712844 5.7424688 21.635109 5.9804688 21.537109 L 11.515625 19.582031 C 11.549625 19.549031 15.921 16.141453 16 16.064453 L 16 16.009766 L 13.455078 13 z M 15.775391 20 C 15.624391 20.011 15.288922 20.044578 15.044922 20.142578 C 14.801922 20.240578 7.6807813 22.375891 7.4257812 22.462891 C 7.1707813 22.560891 6.8454219 22.637266 6.8574219 22.822266 C 6.8694219 22.942266 6.9625625 22.954047 7.1015625 22.998047 C 7.2285625 23.030047 22.362656 26.644703 22.722656 26.720703 C 23.511656 26.872703 24.670547 27.221875 25.435547 26.796875 C 25.551547 26.741875 31.722172 22.723203 31.826172 22.658203 C 32.093172 22.462203 32.045422 22.332578 31.732422 22.267578 C 31.616422 22.256578 30.492594 22.12 29.808594 22 C 29.808594 22 23.974703 24.328813 23.845703 24.382812 C 23.034703 24.731813 22.477234 24.228594 21.990234 23.683594 L 19.091797 20.447266 C 18.812797 20.404266 16.030391 19.989 15.775391 20 z"></path>
          </svg>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {linking.map((ele) => {
                return (
                  <Link
                    className={
                      paramName === ele.href
                        ? "text-vred font-bold"
                        : "text-white transition hover:text-white/75"
                    }
                    href={ele.href}
                    key={ele.id}
                  >
                    {ele.name}
                  </Link>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 p-2 relative">
              <FaOpencart className="text-white  text-4xl" />
              <span className="bg-vred flex justify-center items-center w-[20px] text-white h-[20px] text-center rounded-[50%] absolute right-0">
                {cart.length}
              </span>
            </div>

            <button
              onClick={() => {
                if (turn == 0) {
                  document.querySelector(".menu").style.transform =
                    "translate(0)";
                  document.querySelector(".menu").style.transition = "0.4s";
                  turn = 1;
                } else {
                  document.querySelector(".menu").style.transform =
                    "translate(-1200px)";
                  document.querySelector(".menu").style.transition = "0.4s";
                  turn = 0;
                }
              }}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex h-screen menu flex-col
      w-[300px] lg:hidden md:hidden translate-x-[-1200px] duration-200
      justify-between border-e bg-white"
      >
        <div className="px-4 py-6">
          <Link className="block text-vred" href="#">
            <span className="sr-only">Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="50"
              viewBox="0 0 32 32"
              style={{ fill: "#FA5252" }}
            >
              <path d="M 18.740234 6 C 18.218234 6 12.780203 6.0222031 12.283203 6.0332031 C 11.288203 6.0332031 10.576109 6.0228906 11.287109 6.8378906 C 11.689109 7.2828906 23.845578 21.083203 24.142578 21.408203 C 24.829578 22.180203 25.221187 22.038516 25.742188 21.853516 C 25.907187 21.799516 31.723797 19.594297 31.841797 19.529297 C 32.255797 19.323297 31.758609 18.736156 31.474609 18.410156 C 31.367609 18.302156 20.848469 6.739375 20.730469 6.609375 C 20.232469 6.033375 19.996234 6 18.740234 6 z M 13.455078 13 C 13.455078 13 12.854797 13.077375 12.216797 13.734375 C 11.762797 14.172375 0.19104688 24.617078 0.12304688 24.705078 C -0.22895313 25.187078 0.20420312 25.033969 0.90820312 24.792969 C 0.94220313 24.792969 5.6503906 23.310547 5.6503906 23.310547 C 5.6843906 23.277547 5.6495938 23.299344 5.6835938 23.277344 C 5.6615938 23.036344 5.6496719 22.030844 5.6386719 21.964844 C 5.6046719 21.712844 5.7424688 21.635109 5.9804688 21.537109 L 11.515625 19.582031 C 11.549625 19.549031 15.921 16.141453 16 16.064453 L 16 16.009766 L 13.455078 13 z M 15.775391 20 C 15.624391 20.011 15.288922 20.044578 15.044922 20.142578 C 14.801922 20.240578 7.6807813 22.375891 7.4257812 22.462891 C 7.1707813 22.560891 6.8454219 22.637266 6.8574219 22.822266 C 6.8694219 22.942266 6.9625625 22.954047 7.1015625 22.998047 C 7.2285625 23.030047 22.362656 26.644703 22.722656 26.720703 C 23.511656 26.872703 24.670547 27.221875 25.435547 26.796875 C 25.551547 26.741875 31.722172 22.723203 31.826172 22.658203 C 32.093172 22.462203 32.045422 22.332578 31.732422 22.267578 C 31.616422 22.256578 30.492594 22.12 29.808594 22 C 29.808594 22 23.974703 24.328813 23.845703 24.382812 C 23.034703 24.731813 22.477234 24.228594 21.990234 23.683594 L 19.091797 20.447266 C 18.812797 20.404266 16.030391 19.989 15.775391 20 z"></path>
            </svg>
          </Link>

          <ul className="mt-6 space-y-1 flex flex-col gap-4">
            {linking.map((ele) => {
              return (
                <Link
                  onClick={() => {
                    document.querySelector(".menu").style.transition = "0.4s";
                    document.querySelector(".menu").style.transform =
                      "translate(-1200px)";
                  }}
                  href={ele.href}
                  className={
                    paramName === ele.href
                      ? "bg-vred font-bold block rounded-lg text-gray-100 px-4 py-2 text-sm "
                      : "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  }
                  key={ele.id}
                >
                  {ele.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
