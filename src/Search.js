import React from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
import Header from "./Header";

class Search extends React.Component {
  state = {
    isLoading: true,
    restaurantList: []
  };

  getDatas = async () => {
    const {
      data: {
        items
      }
    } = await axios.get('http://127.0.0.1:10080/api/v1/restaurant',{
              params:{
                query: '만촌역맛집',
                display: 20,
                start: 1,
              }
            });

      this.setState({ restaurantList: items, isLoading: false });
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.keyword);
    this.getDatas();
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