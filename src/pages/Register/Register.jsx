import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AmazonLogo from "./amazon-India-Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { registerInitiate } from "../../redux/action";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.data);

  const history = useNavigate();

  let dispatch = useDispatch();

  useEffect(() => {
    console.log(user, "Test message");
    if (user) {
      history("/");
      // props.history.push("/");
    }
  }, [user, dispatch]);

  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="register">
      <Link to="/">
        <img src={AmazonLogo} className="login-logo" alt="amazon-logo" />
      </Link>
      <div className="registerForm">
        <div class="d-flex flex-row justify-content-center">
          <div class="row">
            <div class="">
              <form>
                <div class="sign-in">Sign Up</div>

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
                  <label id="words_2" for="exampleInputPassword1">
                    <span>Password</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  <div class="form-group">
                    <button
                      type="submit"
                      onClick={(e) => register(e)}
                      class="btn btn-warning continue"
                      id="sign-up"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div class="form-check"></div>
                <Link to="/Login">
                  <button
                    type="button"
                    class="btn btn-warning"
                    id="grey-button"
                  >
                    Login with Amazon account
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

export default Register;
