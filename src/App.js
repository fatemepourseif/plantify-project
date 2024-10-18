import React from "react";
import Navbar from "./components/MainHeader/Navbar";

import mainImage from "./assets/Austen_Gordon_Studio_-_Fine_Art_Print_-_Shopify-min.webp";
import PlantProducts from "./components/Products/PlantProducts/PlantProducts";
import PrintProducts from "./components/Products/PrintProducts/PrintProducts";

const App = () => {
  return (
    <div>
      <Navbar />
      <img
        src={mainImage}
        alt="Austen Gordon Studio"
        style={{ width: "100%" }}
      />
      <PlantProducts/>
      <PrintProducts/>
    </div>
  );
};

export default App;
