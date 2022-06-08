import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/produp-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const SearchBar = () => {
  const [searching, setSearching] = useState("");
  const [lists, setLists] = useState([]);
  const handleChange = (e) => {
    setSearching(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const getListItems = async () => {
      let res = await axios.get("https://fakestoreapi.com/products/");
      // console.log(res.data[0].title);
      setLists(res.data);
    };
    getListItems();
  }, []);
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
                value={searching}
                onChange={handleChange}
                list="suggestions"
              />
              <datalist id="suggestions">
                {lists.slice(0, -10).map((val) => {
                  return (
                    <option key={val.id} value={val.title}>
                      {val.title}
                    </option>
                  );
                })}
              </datalist>
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
