import React from "react";
import "./App.css";
import Header from "./Components/JS/Header";
import Home from "./Components/JS/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/JS/Checkout";
import Login from "./Components/JS/Login";

function App() {
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
