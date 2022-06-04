import Icons1 from "../assets/Icons-search.jpg";
import Icons2 from "../assets/Icons-search-2.jpg";
import Icons3 from "../assets/Icons-search-3.jpg";
import Icons4 from "../assets/Icons-search-4.jpg";
const SearchBarIcons = () => {
  return (
    <>
      <main className="container pb-5">
        <section className="mt-5 row search_icons text-center">
          <div className="col-lg-8 col-sm-12 mx-auto text-center">
            <section className="row">
              <BarIcons
                imgsrc={Icons4}
                title="Inversiones a precios de mayoritas"
              />
              <BarIcons imgsrc={Icons2} title="Negocios uno a uno " />
              <BarIcons imgsrc={Icons3} title="Pagos seguros " />
              <BarIcons imgsrc={Icons1} title="Negocio para todos " />
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchBarIcons;

const BarIcons = (props) => {
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
