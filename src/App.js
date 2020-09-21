import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/JS/Header";
import Home from "./Components/JS/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/JS/Checkout";
import Login from "./Components/JS/Login";
import { auth } from "./DB/firebase";
import { useStateValue } from "./DataLayer/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  // const authUser = null;

  //useEffect will run everytime the app runs, for example [basket], every time the basket changes. If the [] are empty, only runs once.
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
