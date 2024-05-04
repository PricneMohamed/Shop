import Banner from "../__component/CartPage/Banner";
import Cartpage from "../__component/CartPage/Cartpage";
export const metadata = {
  title: "Cart",
  description: "Cart Page",
};
export default function Cart() {
  return (
    <div className='Cart'>
        <Banner />
        <Cartpage />
    </div>
  )
}
