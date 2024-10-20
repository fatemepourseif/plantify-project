import { useEffect, useState } from "react";
import classes from "./PrintProducts.module.css";

const PrintProducts = () => {
  const [prints, setPrints] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchPlants = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://plantifyproject-b3146-default-rtdb.firebaseio.com/prints.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedPrints = [];
      for (const key in responseData) {
        loadedPrints.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          prtSrc: responseData[key].prtSrc,
          hoverSrc: responseData[key].hoverSrc,
        });
      }
      console.log(responseData);
      console.log(loadedPrints);
      setPrints(loadedPrints);
      setIsLoading(false);
    };

    fetchPlants().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className={classes.printsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className={classes.printsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div>
      {!isLoading && (
        <div className={classes.printContainer}>
          <h1 className={classes.title}>Austen Gordon Fine Prints</h1>
          <button className={classes.viewBtn}>VIEW ALL</button>
          <ul className={classes.list}>
            {prints.map((item) => (
              <li>
                <img
                  src={item.prtSrc}
                  alt={item.id}
                  className={classes.image}
                />
                <img
                  src={item.hoverSrc}
                  alt={item.id}
                  className={classes.hoverImage}
                />
                <button>Quick View</button>
                <h3>{item.name} - FINE ART PRINT</h3>
                <p className={classes.price}>R {item.price}.00</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default PrintProducts;
