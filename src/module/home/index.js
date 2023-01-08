import { Link } from "react-router-dom";
import "./index.css";

let Home = function () {    
  return (
    <div>
      <div className="pageHeader">Home</div>
      <div className="linkBox">
        <Link className="link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Home;
