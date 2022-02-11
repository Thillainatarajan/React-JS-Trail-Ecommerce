import React, { useState, useEffect } from "react";
import "./Login.css";
import AmazonLogo from "./amazon-India-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../../redux/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { user } = useSelector((state) => state.data);

  let dispatch = useDispatch();
  let history = useNavigate();

  useEffect(() => {
    if (user) {
      history("/");
      // <Navigate to="/" />;
      // history.push("/");
      // window.location.href = "/";
    }
  }, [user, dispatch]);

  const signIn = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail("");
    setpassword("");
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={AmazonLogo} className="login-logo" alt="amazon-logo" />
      </Link>
      <div className="loginForm">
        <div class="d-flex flex-row justify-content-center">
          <div class="row">
            <div class="">
              <form>
                <div class="sign-in">Sign In</div>
                <div class="form-group">
                  <label id="words_1" for="exampleInputEmail1">
                    Email(phone for mobile accounts)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label
                    id="words_2"
                    class="password-lable-sec"
                    for="exampleInputPassword1"
                  >
                    <span>Password</span>
                    <Link to="/forgotpass">
                      <span class="forgotpass-txt">Forgot your password?</span>
                    </Link>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  <div class="form-group">
                    <button
                      type="submit"
                      onClick={signIn}
                      class="btn btn-warning"
                      id="sign-in"
                    >
                      Sign In
                    </button>
                    <div className="keepmesignin">
                      <input
                        type="checkbox"
                        class="form-check-input checkbox"
                        id="exampleCheck1"
                      />
                      <p class="keep-sign-in">
                        Keep me signed in.{" "}
                        <a href="https://stupidlink.com">Details</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="form-check"></div>
                <Link to="/Register">
                  <button
                    type="button"
                    class="btn btn-warning"
                    id="grey-button"
                  >
                    Create your Amazon account
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
