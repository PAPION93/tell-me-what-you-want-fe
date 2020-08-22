import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("Good be, cruel world");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>number : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
