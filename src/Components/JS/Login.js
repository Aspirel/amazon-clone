import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../CSS/Login.css";
import { auth } from "../../DB/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //it will create a new authentication with email and password and then, if everything is ok, it will send that to the db
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
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
