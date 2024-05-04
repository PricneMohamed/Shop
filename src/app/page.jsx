import Banner from "./__component/HomePage/Banner";
import Ex from "./__component/HomePage/Ex";
import NewProduct from "./__component/HomePage/NewProduct";
import Slider from "./__component/HomePage/Slider";
export const metadata = {
  title: "Home",
  description: "Home Page",
};
export default function Home() {

  return (
    <div className="home">
      <Banner />
      <NewProduct />
      <Ex />
      <Slider />
    </div>
  );
}
