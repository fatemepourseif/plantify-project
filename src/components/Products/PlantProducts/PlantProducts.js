import classes from "./PlantProducts.module.css";

import img1 from "./../../../assets/Img1.webp";
import img2 from "../../../assets/img2.webp"
import img3 from "../../../assets/img3.webp"
import img4 from "../../../assets/img4.webp"
import img5 from "../../../assets/img5.webp"
import img6 from "../../../assets/img6.webp"
import img7 from "../../../assets/img7.webp"
import img8 from "../../../assets/img8.webp"
const DUMMY_DATA = [
  { id: "i1", text: "ALL PLANTS", imageSrc: img1 },
  { id: "i2", text: "POTS AND BASKETS", imageSrc: img2 },
  { id: "i3", text: "PET FRIENDLY", imageSrc: img3 },
  { id: "i4", text: "EASY CARE PLANTS", imageSrc: img4 },
  { id: "i5", text: "HANGING PLANTS", imageSrc: img5 },
  { id: "i6", text: "XL FLOOR STANDING PLANTS", imageSrc: img6 },
  { id: "i7", text: "MOSSBALLS", imageSrc: img7 },
  { id: "i8", text: "HOMEWARE", imageSrc: img8 },
];

const PlantProducts = () => {
  return (
    <div>
      <h1 className={classes.title}>SHOP BY CATEGORY</h1>
      <ul className={classes.list}>
        {DUMMY_DATA.map((item) => (
          <li>
            <img src={item.imageSrc} alt={item.text} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PlantProducts;
