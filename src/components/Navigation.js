import { FaUserAlt, FaCommentDollar } from "react-icons/fa";
import { GiJigsawBox } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <GiJigsawBox className="icons" />
            Mi cuenta
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <hr className="dropdown-divider" />
            <hr className="dropdown-divider" />
            <hr className="dropdown-divider" />
            Menu
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle active"
                  aria-current="page"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GiJigsawBox className="icons" />
                  Mi cuenta
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="my-1">
                    <NavLink to="/" className="p-0">
                      <h5 className="dropdown-item py-2 ps-2">Mi Produp</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/">
                      Dropdown 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/">
                      Dropdown 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/">
                      Dropdown 3
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Saldos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product-list">
                  Produpers TOP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Busco Urgente
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Lo mas vendido
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Tendencias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <FaUserAlt className="icons" />
                  Clear curenta
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Carrito
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-danger"
                  to="/"
                  type="button"
                  id="chatBtn"
                >
                  Chat
                  <FaCommentDollar className="icons" id="chatIcon" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
