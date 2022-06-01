import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/produp-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import Icons1 from "../assets/Icons-search.jpg";
import Icons2 from "../assets/Icons-search-2.jpg";
import Icons3 from "../assets/Icons-search-3.jpg";
import Icons4 from "../assets/Icons-search-4.jpg";

const SearchBar = () => {
  return (
    <>
      <main className="container" id="searchBar">
        <section className="row">
          <div className="col-md-8 col-sm-12 mx-auto text-center">
            <NavLink to="/">
              <img
                src={Logo}
                className="img-fluid w-md-75 w-sm-100"
                alt="Logo"
              />
              <h1 className="title mt-4">iHagamos negocio!</h1>
            </NavLink>
            <form className="d-flex mt-4" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busca to Produpto o Produper"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                <AiOutlineSearch />
              </button>
            </form>
          </div>
        </section>
        <section className="mt-5 row search_icons text-center">
          <div className="col-lg-8 col-sm-12 mx-auto text-center">
            <section className="row">
              <SearchBarIcons
                imgsrc={Icons4}
                title="Inversiones a precios de mayoritas"
              />
              <SearchBarIcons imgsrc={Icons2} title="Negocios uno a uno " />
              <SearchBarIcons imgsrc={Icons3} title="Pagos seguros " />
              <SearchBarIcons imgsrc={Icons1} title="Negocio para todos " />
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchBar;

const SearchBarIcons = (props) => {
  return (
    <>
      <div className="col-md-3 col-sm-12">
        <div>
          <img
            src={props.imgsrc}
            className="img-fluid"
            alt={props.title + "icons"}
          />
        </div>
        <h6 className="mt-1">{props.title}</h6>
      </div>
    </>
  );
};
