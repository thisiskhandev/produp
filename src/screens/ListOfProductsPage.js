import ProductList from "../components/vendor/ProductList";
import SearchBar from "../components/SearchBar";
import ProduperTopSlider from "../components/ProduperTopSlider";
import BannerSlider from "../components/BannerSlider";
const ListOfProductsPage = () => {
  return (
    <>
      <SearchBar />
      <ProduperTopSlider />
      <h2 className="title_top_product text-center my-5">Proudupers Top</h2>
      <ProductList startList="0" endList="-1" />
      <BannerSlider />
    </>
  );
};

export default ListOfProductsPage;
