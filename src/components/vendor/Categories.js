import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <h3 className="mt-3 mb-1">Categorias</h3>
      <ul className="general">
        <li>
          <NavLink to="/">Bolsas (1)</NavLink>
        </li>
        <li>
          <NavLink to="/">Blusas (25)</NavLink>
        </li>
        <li>
          <NavLink to="/">Accesorios de Moda (1)</NavLink>
        </li>
        <li>
          <NavLink to="/">Pantalones y Jeans (1)</NavLink>
        </li>
        <li>
          <NavLink to="/">Vestidos (1) </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Categories;
