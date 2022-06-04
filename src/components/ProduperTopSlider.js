import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ProduperTopSlider = () => {
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    const getProfileAvatars = async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/photos");
      // console.log(res.data.slice(0, 10)[0].thumbnailUrl);
      setAvatars(res.data.slice(0, 20));
    };
    getProfileAvatars();
  }, []);
  const resOptions = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      768: {
        items: 3,
      },
      991: {
        items: 4,
      },
      1000: {
        items: 7,
      },
    },
  };
  return (
    <>
      <main className="container mt-5">
        <section className="row">
          <div className="col-12">
            <OwlCarousel
              className="owl-theme card_product_slides avatars"
              {...resOptions}
              loop
              margin={30}
              nav
              items={7}
              dots={false}
              lazyContent={false}
              lazyLoad={false}
              center={true}
              navText={[
                '<div class="arrow_icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 17l5-5-5-5v10z"></path><path fill="none" d="M0 24V0h24v24H0z"></path></svg></div>',
                '<div class="arrow_icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 7l-5 5 5 5V7z"></path><path fill="none" d="M24 0v24H0V0h24z"></path></svg></div>',
              ]}
            >
              {avatars.map((val) => {
                return (
                  <div className="item avatars_shots" key={val.id}>
                    <NavLink to="/">
                      <img
                        src={val.thumbnailUrl}
                        alt="avatars"
                        className="img-fluid rounded-circle"
                      />
                    </NavLink>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProduperTopSlider;
