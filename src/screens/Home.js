import BannerSlider from "../components/BannerSlider";
import SearchBar from "../components/SearchBar";
import Vendors from "../components/./vendor/Vendors";
import NewProdupers from "../components/NewProdupers";
import ProductCarousel from "../components/vendor/ProductCarousel";
import SearchBarIcons from "../components/SearchBarIcons";
const Home = () => {
  return (
    <>
      <SearchBar />
      <SearchBarIcons />
      <BannerSlider />
      <h2 className="title_top_product text-center mb-3">Prouduper Top</h2>
      <Vendors />
      <Vendors />
      <h2 className="title_top_product text-center mb-3">Nuevos Produpers</h2>
      <NewProdupers />
      <h2 className="title_top_product text-center mb-3">Saldos y Remates</h2>
      <ProductCarousel />
    </>
  );
};

export default Home;
