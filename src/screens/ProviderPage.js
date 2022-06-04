import ProviderProducts from "../components/vendor/ProviderProducts";
import SearchBar from "../components/SearchBar";
import ProduperTopSlider from "../components/ProduperTopSlider";
import BannerShot from "../assets/provider-banner.jpg";
import ProviderDash from "../components/vendor/ProviderDash";
const ProviderPage = () => {
  return (
    <>
      <SearchBar />
      <Banner />
      <main className="container-fluid">
        <section className="row">
          <div className="col-3 p-0">
            <ProviderDash />
          </div>
          <div className="col-9 mt-5">
            <ProviderProducts startList="0" endList="-1" />
          </div>
        </section>
      </main>
      <h2 className="title_top_product text-center my-5">Proudupers Top</h2>
      <div className="pb-5">
        <ProduperTopSlider />
      </div>
    </>
  );
};

export default ProviderPage;

const Banner = () => {
  return (
    <>
      <main className="container-fluid banner mt-5">
        <section className="row">
          <div className="col-lg-11 col-sm-12">
            <h4 className="text-lg-end text-sm-center" style={{ fontSize: 18 }}>
              Ver otros Produpers
            </h4>
          </div>
        </section>
        <section className="row">
          <div className="col-12 p-0">
            <img
              src={BannerShot}
              alt="Provider Banner"
              className="img-fluid w-100"
            />
          </div>
        </section>
      </main>
    </>
  );
};
