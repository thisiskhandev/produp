import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/produp-logo.png";
import { AiOutlineSearch } from "react-icons/ai";

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
      </main>
    </>
  );
};

export default SearchBar;
