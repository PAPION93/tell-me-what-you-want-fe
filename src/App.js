import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:keyword" component={Search} />
      </HashRouter>

      /*
      <BrowserRouter>
        <AppBar />
        <Body />
      </BrowserRouter>
      */
    );
  }
}

export default App;
