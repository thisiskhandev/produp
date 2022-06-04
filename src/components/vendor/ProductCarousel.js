import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductList from "./ProductList";
import { TiArrowSortedDown } from "react-icons/ti";

const ProductCarousel = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme card_product_slides pb-5"
        loop
        margin={10}
        nav
        dots
        items={1}
        lazyContent={false}
        lazyLoad={false}
        navText={[
          '<div class="arrow_icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 17l5-5-5-5v10z"></path><path fill="none" d="M0 24V0h24v24H0z"></path></svg></div>',
          '<div class="arrow_icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 7l-5 5 5 5V7z"></path><path fill="none" d="M24 0v24H0V0h24z"></path></svg></div>',
        ]}
      >
        <div className="item">
          <ProductList startList="0" endList="4"/>
        </div>
        <div className="item">
          <ProductList startList="5" endList="9" />
        </div>
        <div className="item">
          <ProductList startList="9" endList="13" />
        </div>
      </OwlCarousel>
    </>
  );
};

export default ProductCarousel;
