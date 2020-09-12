import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </HashRouter>
    );
  }
}

export default App;
