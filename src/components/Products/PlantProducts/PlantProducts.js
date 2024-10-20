import classes from "./PlantProducts.module.css";

import { useEffect, useState } from "react";

const PlantProducts = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchPlants = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://plantifyproject-b3146-default-rtdb.firebaseio.com/plants.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedPlants = [];
      for (const key in responseData) {
        loadedPlants.push({
          id: key,
          text: responseData[key].text,
          imageSrc: responseData[key].imageSrc,
        });
      }
      console.log(responseData);
      console.log(loadedPlants);
      setPlants(loadedPlants);
      setIsLoading(false);
    };

    fetchPlants().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className={classes.plantsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <div>
      <h1 className={classes.title}>
        {isLoading ? "Loading..." : "SHOP BY CATEGORY"}
      </h1>
      {!isLoading && (
        <ul className={classes.list}>
          {plants.map((item) => (
            <li key={item.id}>
              <img src={item.imageSrc} alt={item.text} />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default PlantProducts;
