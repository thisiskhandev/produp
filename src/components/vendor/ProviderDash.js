import VendorAccords from "./VendorAccords";
import VendorContact from "./VendorContact";
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
          </div>
        </section>
      </main>
    </>
  );
};

export default ProviderDash;
