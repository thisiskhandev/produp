import { NavLink } from "react-router-dom";
import { FaCommentDollar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const VendorContact = () => {
  return (
    <>
      <section className="row vendor_contact align-items-center">
        <div className="col-12">
          <NavLink className="vendor_chat" to="/">
            <ul>
              <li>
                <FaCommentDollar />
              </li>
              <ul>
                <li>
                  <h5>Cantacta el Produper</h5>
                </li>
                <li>Hagamos Negocia</li>
              </ul>
            </ul>
          </NavLink>
        </div>
      </section>
      <section className="row reputation">
        <div className="col-11 mx-auto">
          <ul>
            <li>
              <AiFillStar />
              Reputaoldm
            </li>
            <li>
              <h4>85%</h4>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default VendorContact;
