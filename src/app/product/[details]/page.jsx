import Detailsbtn from "@/app/__component/Details/Detailsbtn";
import Loader from "@/app/__component/Loader/Loader";
import CardProduct from "@/app/__component/Product/CardProduct";
import Link from "next/link";


async function getData(params) {
  const res = await fetch(`https://dummyjson.com/products/${params}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.details);
  return {
    title: `${data.title}`
  }
  }

export default async function Page({params}) {
  const data = await getData(params.details);
if(data){
  return(
    <>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-vred sm:text-3xl">{data.title}</h2>
    
                <p className="mt-4 text-gray-500">
                    {data.description}
                </p>
              </header>
        {/* ============================================== */}
      <Detailsbtn ele ={data} name ={data.title}/>
      {/* ==================================================== */}
            </div>
          </div>
    
          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Link href="#" className="group block">
                  <img
                    src={data.images[0]}
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />
    
                  <div className="mt-3">
                    <h3
                      className="font-medium text-gray-200 group-hover:underline group-hover:underline-offset-4"
                    >
                      {data.title}
                    </h3>
    
                    <p className="mt-1 text-sm text-vred">${data.price}</p>
                  </div>
                </Link>
              </li>
      {data.images[2]?              <li>
                <Link href="#" className="group block">
                  <img
                    src={data.images[2]}
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />
    
                  <div className="mt-3">
                    <h3
                      className="font-medium text-gray-200 group-hover:underline group-hover:underline-offset-4"
                    >
                                        {data.title} New Version Is Soon
                    </h3>
    
                    <p className="mt-1 text-sm text-vred">${data.price + 30}</p>
                  </div>
                </Link>
              </li>:null}
            </ul>
          </div>
        </div>
      </div>
    </section>
        <div className="text-white  p-5">
          <h1 className="text-end text-3xl mr-10">Other things</h1>
          <div className="flex flex-wrap justify-evenly my-10">
        <CardProduct />
          </div>
        </div>
    </>
    
        )
}else{
  return(
    <center>
      <Loader />
    </center>
  )
}
}
