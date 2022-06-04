import ProductList from "../components/vendor/ProductList";
import SearchBar from "../components/SearchBar";

const ListOfProductsPage = () => {
  return (
    <>
      <SearchBar />
      <h2 className="title_top_product text-center my-5">Proudupers Top</h2>
      <ProductList startList="0" endList="-1" />
    </>
  );
};

export default ListOfProductsPage;
