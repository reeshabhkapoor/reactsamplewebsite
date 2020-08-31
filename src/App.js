import React from "react";
import "./App.css";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div id="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
