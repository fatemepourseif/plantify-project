import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/MainHeader/Navbar";
import mainImage from "./assets/Austen_Gordon_Studio_-_Fine_Art_Print_-_Shopify-min.webp";
import PlantProducts from "./components/Products/PlantProducts/PlantProducts";
import PrintProducts from "./components/Products/PrintProducts/PrintProducts";
import Services from "./components/AllServices/services";
import AuthForm from "./components/Login/AuthForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <img
                src={mainImage}
                alt="Austen Gordon Studio"
                style={{ width: "100%" }}
              />
              <PlantProducts />
              <PrintProducts />
              <Services />
            </div>
          }
        />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </div>
  );
};

export default App;
