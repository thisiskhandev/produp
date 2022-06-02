import BannerSlider from "../components/BannerSlider";
import SearchBar from "../components/SearchBar";
import Vendors from "../components/./vendor/Vendors";
const Home = () => {
  return (
    <>
      <SearchBar />
      <BannerSlider />
      <Vendors/>
    </>
  );
};

export default Home;
