import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Restaurant from "./Restaurant";
import AppBar from "./AppBar";
import Body from "./Body";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <AppBar />
          <Body />
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/search" component={Search} /> */}
      </BrowserRouter>
      );
  }
}

export default App;