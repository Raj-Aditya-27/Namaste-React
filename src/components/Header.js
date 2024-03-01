import { LOGO_URL } from "../utilities/constants";
import { useState } from "../../node_modules/react";
import { Link } from "react-router-dom";

const Header = () => {
  // Used btnName useState to toggle login and logout 
  let [btnName, setbtnName] = useState("Login");
  return (
    <div className="NavBar">
      <div className="logo">
        <img alt="swiggy" src={LOGO_URL}></img>
      </div>
      <div className="NavLinks">
        <ul>
          <li><Link to={"/"} className="Link">Home</Link></li>
          <li><Link to={"/about"} className="Link">About</Link></li>
          <li><Link to={"/contact"} className="Link">Contact</Link></li>
        </ul>
        <button
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

// There is two way to export and import
// You can use export default component
// Other way is to use export keyword before component declaration

export default Header;
