import { Link } from "react-router-dom";

const PageNotFound = () => {
 return (
  <div className="404">
   <h1>Page Not Found</h1>
   <Link to="/">Go Home</Link>
  </div>
 );
};

export default PageNotFound;
