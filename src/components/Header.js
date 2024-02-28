import { LOGO_URL } from "../utilities/constants";

const Header = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <img alt="swiggy" src={LOGO_URL}></img>
      </div>
      <div className="NavLinks">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Offers</li>
        </ul>
      </div>
    </div>
  );
};

// There is two way to export and import
// You can use export default component
// Other way is to use export keyword before component declaration

export default Header;
