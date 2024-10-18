import classes from "./PrintProducts.module.css";

import prt1 from "../../../assets/print1.webp";
import prt1Hover from "../../../assets/print1a.webp";
import prt2 from "../../../assets/print2.webp";
import prt2Hover from "../../../assets/print2a.webp";
import prt3 from "../../../assets/print3.webp";
import prt3Hover from "../../../assets/print3a.webp";
import prt4 from "../../../assets/print4.webp";
import prt4Hover from "../../../assets/print4a.webp";

const DUMMY_DATA = [
  {
    id: "p1",
    prtSrc: prt1,
    hoverSrc: prt1Hover,
    name: "BIRTHDAY BLOOMS",
    price: 260.0,
  },
  {
    id: "p2",
    prtSrc: prt2,
    hoverSrc: prt2Hover,
    name: "END OF SUMMER ",
    price: 260.0,
  },
  {
    id: "p3",
    prtSrc: prt3,
    hoverSrc: prt3Hover,
    name: "GARDEN TREASURE",
    price: 450.0,
  },
  {
    id: "p4",
    prtSrc: prt4,
    hoverSrc: prt4Hover,
    name: "GARDEN TREASURE",
    price: 450.0,
  },
];

const PrintProducts = () => {
  return (
    <div className={classes.printContainer}>
      <h1 className={classes.title}>Austen Gordon Fine Prints</h1>
      <button className={classes.viewBtn}>VIEW ALL</button>
      <ul className={classes.list}>
        {DUMMY_DATA.map((item) => (
          <li>
            <img src={item.prtSrc} alt={item.id} className={classes.image} />
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
  );
};
export default PrintProducts;
