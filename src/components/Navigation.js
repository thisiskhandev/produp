import { FaUserAlt, FaCommentDollar } from "react-icons/fa";
import { GiJigsawBox } from "react-icons/gi";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <GiJigsawBox className="icons" />
            Mi cuenta
          </a>
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
                <a
                  className="nav-link dropdown-toggle active"
                  aria-current="page"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GiJigsawBox className="icons" />
                  Mi cuenta
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="my-1">
                    <h5 className="dropdown-item">Mi Produp</h5>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dropdown 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dropdown 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dropdown 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Saldos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Produpers TOP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Busco Urgente
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lo mas vendido
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tendencias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaUserAlt className="icons" />
                  Clear curenta
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Carrito
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-danger"
                  href="#"
                  type="button"
                  id="chatBtn"
                >
                  Chat
                  <FaCommentDollar className="icons" id="chatIcon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
