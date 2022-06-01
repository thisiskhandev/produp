import { NavLink } from "react-router-dom";
import Logo from "../assets/fav.png";

const Vendors = () => {
  return (
    <>
      <main className="vendors container">
        <section className="row">
          <div className="col-12">
            <Profile />
          </div>
        </section>
      </main>
    </>
  );
};

export default Vendors;

const Profile = () => {
  return (
    <>
      <div
        className="profile d-flex align-items-center"
        style={{ backgroundColor: "#333", borderRadius: 10, color: "#fff" }}
      >
        <div>
          <img src={Logo} alt="Vendor Logo" />
        </div>
        <div>
          <h4>lbPRODUP SA DE CV</h4>
          <h5>Proveeder</h5>
          <h6>5 anos</h6>
          <NavLink to="/">View Profile</NavLink>
        </div>
      </div>
    </>
  );
};
