import VendorAccords from "./VendorAccords";
import VendorContact from "./VendorContact";
import Locks from "./Locks";
import Categories from "./Categories";
import BannerSlider from "../BannerSlider";

const ProviderDash = () => {
  return (
    <>
      <main
        className="container provider_dash pt-4 h-100"
        style={{ background: "#E4E5EC" }}
      >
        <section className="row">
          <div className="col-12">
            <VendorContact />
            <VendorAccords />
            <Locks cols="col-12 text-start" />
            <Categories />
            <BannerSlider className="okaybro"/>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProviderDash;
