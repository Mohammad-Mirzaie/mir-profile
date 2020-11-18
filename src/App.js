import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" component={AboutUs} exact />
        <Route path="/work" component={MyWork} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    </>
  );
};

export default App;
