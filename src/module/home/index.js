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
        <Link className="link" to="/tail-head">
          Head & Tail
        </Link>
      </div>
    </div>
  );
};

export default Home;
