import { Link } from "react-router-dom";
import HomePageImage from "../Assert/Images/Homepage.png";
import "../Styles/Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="img-container">
        <img src={HomePageImage} alt="" />
      </div>
      <div className="main-content">
        <div className="quote">
          <h1 className="line1">“To live a full life, </h1>
          <h1 className="line2">you have to fill your stomach first” </h1>
          <p className="auther">- by aRandomFoodie</p>
        </div>

        <div className="introduction">
          <h2>Namaste 🙏</h2>
          <p>
            we are creating a healthy community for foodies in india. Currenlty
            we are working on spreading quality recipies all around the world.
          </p>
          <div className="btns">
            <Link className="cta" to="#services">
              <span>→</span>
              See Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
