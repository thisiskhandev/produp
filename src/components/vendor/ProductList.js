import axios from "axios";
import { useState, useEffect } from "react";
import { RiLockUnlockFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import loading from "../../assets/loading.gif";
const ProductList = (props) => {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProductsList = async () => {
      setIsLoading(true);
      let res = await axios.get("https://fakestoreapi.com/products/");
      // console.log(res.data[5]);
      setproducts(res.data);
      setIsLoading(false);
    };
    getProductsList();
  }, []);
  if (isLoading)
    return (
      <div className="text-center py-5">
        <img src={loading} alt="loading" width="130" />
      </div>
    );
  return (
    <>
      <main className="container pb-5">
        <section className="row card_products">
          {products.slice(props.startList, props.endList).map((val) => {
            return (
              <div
                className="top_products col-md-3 col-sm-12 py-2"
                key={val.id}
              >
                <div className="card py-3 px-2 border-0 rounded-top-3 rounded-start-3">
                  <span className="badge text-white p-2 ms-2 mb-3 sale w-25">
                    Saldo
                  </span>
                  <NavLink to="/" className="mb-4 mx-2 d-block">
                    <img
                      src={val.image}
                      className="img-fluid w-100 top_pro_shots"
                      alt={"products " + val.id}
                    />
                  </NavLink>
                  <div className="row">
                    <div className="col-12">
                      <ul className="p_series flex-wrap gap-2 justify-content-center">
                        <li>P1</li>
                        <li>P2</li>
                        <li>P3</li>
                        <li style={{ backgroundColor: "#ddd" }}>P4</li>
                        <li style={{ backgroundColor: "#ddd" }}>P5</li>
                        <li style={{ backgroundColor: "#ddd" }}>P6</li>
                      </ul>
                    </div>
                  </div>
                  <section className="row pricing">
                    <div className="col-12">
                      <div className="price justify-content-evenly py-2">
                        <RiLockUnlockFill />
                        <p>$&nbsp;{val.price}</p>
                      </div>
                      <div className="product_details">
                        <NavLink to="/" className="d-block links">
                          Mese sin Interest
                        </NavLink>
                        <NavLink to="/" className="d-block links">
                          Envio Gratios P3 P4 P5 P6
                        </NavLink>
                        <p
                          className="product_desc"
                          style={{ whiteSpace: "normal", width: "85%" }}
                        >
                          {val.title}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                <NavLink className="btn btn_show_more text-black" to="/">
                  Ver Producto
                </NavLink>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ProductList;
