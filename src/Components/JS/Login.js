import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="amazon-logo-login.png" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} type="submit" className="signIn_button">
            Sign-in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
      <p className="newToAmazon">
        <span>New to amazon?</span>
      </p>
      <button onClick={register} type="submit" className="createAccount_button">
        Create your Amazon Clone account
      </button>
    </div>
  );
}

export default Login;
