import Banner from "../__component/Product/Banner";
import ProductDiv from "../__component/Product/ProductDiv";
export const metadata = {
  title: "Products",
  description: "Products Page",
};
export default function Product() {
  return (
    <div className="Product">
        <Banner />
        <ProductDiv />
    </div>
  )
}
