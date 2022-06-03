import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Logo from "../assets/fav.png";
import { BsShieldFillCheck } from "react-icons/bs";
// import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const NewProdupers = () => {
  return (
    <>
      <main className="vendors container mb-5">
        <section className="row gy-4">
          <ProductCardInner />
          <ProductCardInner />
          <ProductCardInner />
          <ProductCardInner />
        </section>
      </main>
    </>
  );
};

export default NewProdupers;

const ProductCardInner = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card">
          <Profile />
          <Icons />
          <section className="row">
            <div className="col-12">
              <ul className="p_series justify-content-evenly my-3">
                <li>P1</li>
                <li>P2</li>
                <li>P3</li>
                <li>P4</li>
                <li>P5</li>
                <li>P6</li>
              </ul>
            </div>
          </section>
          <section className="row">
            <div className="col-12 pb-3">
              <NewVendProductList />
            </div>
          </section>
          <NavLink className="btn btn_show_more text-black" to="/">
            Ver Almacen
          </NavLink>
        </div>
      </div>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <section className="user_profile profile d-flex">
        <div className="row align-items-center ps-2">
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
        </div>
      </section>
    </>
  );
};

const Icons = () => {
  return (
    <>
      <section className="verification row pt-3">
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

const NewVendProductList = () => {
  const [proShots, setProShots] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://fakestoreapi.com/products/");
      // console.log(res.data);
      setProShots(res.data);
    }

    getData();
  }, []);
  return (
    <>
      <ReactOwlCarousel
        className="owl-theme product_slides"
        loop
        margin={10}
        nav
        dots={false}
        lazyLoad={true}
      >
        {proShots.map((val) => {
          return (
            <div className="item product_items_slides" key={val.id}>
              <img
                src={val.image}
                className="img-fluid"
                alt={"Products " + val.id}
              />
            </div>
          );
        })}
      </ReactOwlCarousel>
    </>
  );
};
