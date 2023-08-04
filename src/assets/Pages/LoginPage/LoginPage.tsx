import { ChangeEvent } from "react";
import {
  setEmail,
  setPassword,
} from "../../Redux/Reducers/LoginAuth/LoginAuth";
import { Link } from "react-router-dom";

import useAppDispatch from "../../Hook/UseAppDispatch";
import useAppSelector from "../../Hook/UseAppSelector";
import LoginButton from "./Components/LoginButton/LoginButton";

import "./Components/Style/LoginPage.css";

function LoginPage() {
  const dispatch = useAppDispatch();
  const authLogin = useAppSelector((state) => state.authLogin);

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value));
  };
  
  return (
    <>
      <section>
        <div className="wrapper">
          <div>
            <h1>Login</h1>

            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                value={authLogin.email}
                onChange={handleEmailInput}
              />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={authLogin.password}
                onChange={handlePasswordInput}
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>

              <Link to={"#"} className="forgot-password">
                Forgot Password
              </Link>
            </div>

            <LoginButton />

            <div className="register-link">
              <p>
                Don't have an account? {""}
                <Link to={"/register"} className="register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
