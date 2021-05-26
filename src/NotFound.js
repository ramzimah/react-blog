import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>that page cannot be found</p>
      <Link to="/">
        <button>Back to the home page</button>{" "}
      </Link>
    </div>
  );
};

export default NotFound;
