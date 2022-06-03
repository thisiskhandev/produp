import { NavLink } from "react-router-dom";
import Logo from "../../assets/fav.png";
import { BsShieldFillCheck, BsInboxes } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { RiLock2Fill, RiLockUnlockFill } from "react-icons/ri";
import { FaCommentDollar } from "react-icons/fa";
import { AiFillStar, AiOutlineFieldTime } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import TopProducts from "./TopProducts";
import LocksArr from "./LocksArr";
import { useState } from "react";
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
                <Locks />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 vendor_col">
                <VendorContact />
                <Accords />
              </div>
            </section>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 bg-white">
            <TopProducts cols="col-md-4" start="0" limit="3" />
          </div>
        </section>
        <section className={"row mt-0 more_top_products bg-white " + showTopPro}>
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

const Locks = () => {
  return (
    <>
      <section className="profile_locks row mt-3 align-items-center">
        {LocksArr.map((val) => {
          return (
            <div className="col-md-6 col-sm-12" key={val.id}>
              <div>
                <ul>
                  <li>
                    {val.lockType === "locked" ? (
                      <RiLock2Fill />
                    ) : (
                      <RiLockUnlockFill />
                    )}
                  </li>
                  <li>
                    <h2>{val.pData}</h2>
                  </li>
                  <li>
                    <p>{val.pzaData}</p>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

const VendorContact = () => {
  return (
    <>
      <section className="row vendor_contact align-items-center">
        <div className="col-12">
          <NavLink className="vendor_chat" to="/">
            <ul>
              <li>
                <FaCommentDollar />
              </li>
              <ul>
                <li>
                  <h5>Cantacta el Produper</h5>
                </li>
                <li>Hagamos Negocia</li>
              </ul>
            </ul>
          </NavLink>
        </div>
      </section>
      <section className="row reputation">
        <div className="col-11 mx-auto">
          <ul>
            <li>
              <AiFillStar />
              Reputaoldm
            </li>
            <li>
              <h4>85%</h4>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

const Accords = () => {
  return (
    <>
      <section className="row vendor_faq">
        <div className="col-11 mx-auto">
          <div className="accordion" id="vendor_accords">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <FaRegComments />
                  Opiniones
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#vendor_accords"
              >
                <div className="accordion-body">1</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <AiOutlineFieldTime />
                  Velocidad
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#vendor_accords"
              >
                <div className="accordion-body">2</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <BsInboxes />
                  Existencias
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#vendor_accords"
              >
                <div className="accordion-body">3</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
