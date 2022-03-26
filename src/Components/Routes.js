import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Home from "./Home";
import SignUp from "./Signup";
import Login from "./Login";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;
