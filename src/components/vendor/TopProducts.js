import { useState, useEffect } from "react";
import { RiLockUnlockFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const TopProducts = () => {
  var [topProducts, setTopProducts] = useState([]);
  const getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    // const data = await response.json();
    // console.log(data);
    setTopProducts(await response.json());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="row">
        {topProducts.slice(0, 3).map((val, index) => {
          return (
            <div className="top_products col-md-4 col-sm-12 py-2" key={val.id}>
              <span className="badge text-white p-2 sale">Saldo</span>
              <NavLink to="/" className="my-4 d-block">
                <img
                  src={val.image}
                  className="img-fluid w-100 top_pro_shots"
                  alt={"top products " + index}
                />
              </NavLink>
              <div className="row">
                <div className="col-12">
                  <ul className="p_series">
                    <li>P1</li>
                    <li>P2</li>
                    <li>P3</li>
                    <li>P4</li>
                    <li>P5</li>
                    <li>P6</li>
                  </ul>
                </div>
              </div>
              <div className="row pricing">
                <div className="col-12">
                  <div className="price">
                    <RiLockUnlockFill />
                    <p>$&nbsp;{val.price}</p>
                  </div>
                  <p className="product_desc">{val.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TopProducts;