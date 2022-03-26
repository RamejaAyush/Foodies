import { Link } from "react-router-dom";
import HomePageImage from "../Assert/Images/Homepage.png";
import { motion } from "framer-motion";
import "../Styles/Home.scss";

const Home = () => {
  const imgContAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };
  const contentContAnimation = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };
  return (
    <div className="Home">
      <motion.div
        variants={imgContAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="img-container">
        <img src={HomePageImage} alt="" />
      </motion.div>
      <motion.div
        variants={contentContAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="main-content">
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
      </motion.div>
    </div>
  );
};

export default Home;
