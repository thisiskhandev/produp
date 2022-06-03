import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductList from "./ProductList";

const ProductCarousel = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme product_slides"
        loop
        margin={10}
        nav
        dots
        items={1}
      >
        <div className="item">
          <ProductList />
        </div>
      </OwlCarousel>
    </>
  );
};

export default ProductCarousel;
