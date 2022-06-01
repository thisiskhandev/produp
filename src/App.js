import React from "react";
import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import UserRegForm from "./components/UserRegForm";
import ProviderRegForm from "./components/ProviderRegForm";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserRegForm />} />
        <Route path="/provider-form" element={<ProviderRegForm />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
