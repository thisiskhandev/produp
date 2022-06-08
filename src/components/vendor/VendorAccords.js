import { FaRegComments } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsInboxes } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const VendorAccords = () => {
  return (
    <>
      <section className="row vendor_faq">
        <div className="col-11 mx-auto">
          <div className="accordion" id="vendor_accords">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <FaRegComments />
                  Opiniones
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#vendor_accords"
              >
                <div className="accordion-body">1</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <AiOutlineFieldTime />
                  Velocidad
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#vendor_accords"
              >
                <div className="accordion-body">2</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <BsInboxes />
                  Existencias
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#vendor_accords"
              >
                <div className="accordion-body">3</div>
              </div>
            </div>
            <NavLink to="/" className="accord_btn">
              Pregunta
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorAccords;
