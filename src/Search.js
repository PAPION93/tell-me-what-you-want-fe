import React from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
import Header from "./Header";

class Search extends React.Component {
  state = {
    isLoading: true,
    restaurantList: [],
    keyword : ""
  };

  getDatas = async (keyword) => {
    const {
      data: {
        items
      }
    } = await axios.get('http://127.0.0.1:10080/api/v1/restaurant',{
              params:{
                query: keyword,
                display: 20,
                start: 1,
              }
            });

      this.setState({ restaurantList: items, isLoading: false });
  };

  componentDidMount() {
    const { location } = this.props;

    if (!location.state) {
      return null;
    }

    this.setState({ keyword: location.state.keyword });
    this.getDatas(location.state.keyword);
  }

  render() {
    const { isLoading, restaurantList } = this.state;
    return (
    <div>
      <Header />
      {isLoading 
        ? "Loading..."
        : restaurantList.map((restaurant) => {
            return (
              <Restaurant
                key={restaurant.id}
                title={restaurant.title}
                />
            );
          })}
    </div>
    );
  }
}

export default Search;