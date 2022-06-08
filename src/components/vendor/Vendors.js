import { NavLink } from "react-router-dom";
import Logo from "../../assets/fav.png";
import { BsShieldFillCheck } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import TopProducts from "./TopProducts";
import { useState } from "react";
import VendorAccords from "./VendorAccords";
import VendorContact from "./VendorContact";
import Locks from "./Locks";
const Vendors = () => {
  const [showTopPro, setShowTopPro] = useState("d-none");
  const funShowProd = () => {
    showTopPro === "d-none"
      ? setShowTopPro("d-block")
      : setShowTopPro("d-none");
  };
  // console.log(showTopPro);

  return (
    <>
      <main className="vendors container mb-5">
        <section className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <section className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 bg-white">
                <Profile />
                <Icons />
                <Locks cols="col-md-6 col-sm-12"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 vendor_col">
                <VendorContact />
                <VendorAccords />
              </div>
            </section>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 bg-white">
            <TopProducts cols="col-md-4" start="0" limit="3" />
          </div>
        </section>
        <section
          className={"row mt-0 more_top_products bg-white " + showTopPro}
        >
          <TopProducts cols="col-lg-2 col-md-4" start="3" limit="-1" />
        </section>
        <section className="row">
          <div className="col-12 p-0">
            <button className="btn btn_show_more" onClick={funShowProd}>
              Ver Almacen <TiArrowSortedDown />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Vendors;

const Profile = () => {
  return (
    <>
      <section className="row profile align-items-center p-2">
        <div className="col-3">
          <img className="vendor_logo" src={Logo} alt="Vendor Logo" />
        </div>
        <div className="col-9 data ps-4">
          <h4>lbPRODUP SA DE CV</h4>
          <h5>Proveeder</h5>
          <h6>5 anos</h6>
          <NavLink className="profile_link" to="/">
            View Profile
          </NavLink>
        </div>
      </section>
    </>
  );
};

const Icons = () => {
  return (
    <>
      <section className="verification row mt-3">
        <div className="col-4">
          <div className="verification_icons text-center">
            <h5>Verification</h5>
            <BsShieldFillCheck />
          </div>
        </div>
        <div className="col-4">
          <div className="verification_icons text-center">
            <h5>Garantia</h5>
            <BsShieldFillCheck />
          </div>
        </div>
        <div className="col-4">
          <div className="verification_icons text-center">
            <h5>Factura</h5>
            <BsShieldFillCheck />
          </div>
        </div>
      </section>
    </>
  );
};


