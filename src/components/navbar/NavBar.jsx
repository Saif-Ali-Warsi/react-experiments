import { Link } from "react-router-dom";
import "../../components/navbar/navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/dashboard" className="link">
          Dashboard
        </Link>
        <Link to="/user-page" className="link">
          User 
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
