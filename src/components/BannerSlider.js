import { NavLink } from "react-router-dom";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

const BannerSlider = () => {
  return (
    <>
      <main id="theBanner" className="container mb-5">
        <section className="row gy-sm-4 gy-4">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <BannerOne idNo={1} />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <BannerOne idNo={2} />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <BannerThird />
          </div>
        </section>
      </main>
    </>
  );
};

export default BannerSlider;

const BannerOne = (props) => {
  const [banners, setBanners] = useState([]);
  const getBannerAds = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    // console.log(response);
    // const data = await response.json();
    // console.log(data[0].avatar_url);
    setBanners(await response.json());
  };

  useEffect(() => {
    getBannerAds();
  }, []);
  return (
    <>
      <div
        id={"carouselFade" + props.idNo}
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {banners.slice(0,9).map((val, index) => {
            return (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={val.url}
                  className="d-block img-fluid"
                  alt={index + " Banner"}
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#carouselFade" + props.idNo}
          data-bs-slide="prev"
        >
          <MdArrowRight />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#carouselFade" + props.idNo}
          data-bs-slide="next"
        >
          <MdArrowLeft />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

const BannerThird = () => {
  return (
    <>
      <div id="thirdBanner">
        <h3>Conviertete en un PRODUPER GRATIS por 30 dias </h3>
        <NavLink to="/">Hacer negocio YA</NavLink>
      </div>
    </>
  );
};
