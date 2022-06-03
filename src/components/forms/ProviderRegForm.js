import { FaPlusCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const ProviderRegForm = () => {
  return (
    <>
      <main className="py-5" style={{ background: "#333" }}>
        <main
          className="container px-md-5 px-1 py-5 the_form"
          style={{ maxWidth: "650px" }}
        >
          <h3 className="text-center text-uppercase pb-3">IHAGAMOS NEGOCIO! </h3>
          <section className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h6>Cornpleta tus datos</h6>
              <h6>Cuenta PRODUPER</h6>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h6 className="text-md-end text-start c_primary">
                <NavLink className="d-block" to="/user-form">
                  Crear Cuenta personal{" "}
                </NavLink>
              </h6>
            </div>
          </section>
          <section className="row pt-3">
            <div className="col-12">
              <form action="" method="">
                <div className="mb-2">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="Nombre Completo o Razon Social"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="Correo electrOnico"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="Contraselia de inicio de sesi6n"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="tel"
                    name=""
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="Telefono"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="CURP"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="RFC"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="Direcci6n"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="file"
                    name=""
                    className="form-control d-none"
                    id="files"
                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                  <label htmlFor="files" className="files">
                    Subir foto de tienda: (Opcional para reputaciOn)
                    <FaPlusCircle />
                  </label>
                </div>
                <p className="text-center pt-1 pb-4">
                  <small>
                    Declaro que soy mayor de edad, acepto los Terminos y
                    Condiciones y autorizo el use de mis datos de acuerdo a la
                    DeclaraciOn de Privacidad.
                  </small>
                </p>
                <button type="submit" className="btn btn-primary">
                  Enviar codigo de verificaciOn
                </button>
                <p className="text-center py-3">
                  Lo enviamos un codigo por correo para confirmar que to
                  pertenece. Si no lo encuentras revisa to carpeta de correo no
                  deseado.
                </p>
                <h5>Ingresa el codigo</h5>
                <div className="text-center mt-4">
                  <input type="number" className="otp" maxLength={1} size={1} />
                  <input type="number" className="otp" maxLength={1} size={1} />
                  <input type="number" className="otp" maxLength={1} size={1} />
                  <input type="number" className="otp" maxLength={1} size={1} />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Confimar
                </button>
              </form>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default ProviderRegForm;
