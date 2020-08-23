import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    datas: [],
  };

  componentDidMount() {
    this.getDatas();
  }

  getDatas = async () => {
    const headers = {
      "X-Naver-Client-Id": "",
      "X-Naver-Client-Secret": "",
    };

    const datas = await axios.get(
      "https://openapi.naver.com/v1/search/local?query=만촌역맛집",
      { headers }
    );

    console.log(datas);
  };

  render() {
    const { isLoading } = this.state;
    return <div> {isLoading ? "Loading..." : "We are Ready"} </div>;
  }
}

export default App;
