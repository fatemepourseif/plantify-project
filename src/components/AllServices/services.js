import classes from "./Services.module.css";
import srv1Address from "./../../assets/serv1.webp";
import srv2Address from "../../assets/serv2.jpg";
import srv3Address from "../../assets/serv3.jpg";

const DUMMY_DATA = [
  { srvSrc: srv1Address, id: "s1" , title:"CORPORATE GIFTING"},
  { srvSrc: srv2Address, id: "s2" ,title:"PLANT CONSULTS"},
  { srvSrc: srv3Address, id: "s3" ,title:"PLANT RENTALS"},
];
const Services = () => {
  return (
    <div className={classes.servicesContainer}>
      <h2>OUR SERVICES</h2>
      <p>Explore some of our Value Added Services. Find them All Here.</p>
      <ul>
        {DUMMY_DATA.map((item) => (
          <li>
            <img src={item.srvSrc} alt={item.id} />
            <div>
              <h3>{item.title}</h3>
              <button>LEARN MORE</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Services;
