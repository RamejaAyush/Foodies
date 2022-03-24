import LoginImg from "../Assert/Images/Login.png";
import "../Styles/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="img-container">
        <img src={LoginImg} alt="" />
      </div>
      <div className="form-container"></div>
    </div>
  );
};

export default Login;
