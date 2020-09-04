import React from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
import AppBar from "./AppBar";

class App extends React.Component {
  state = {
    isLoading: true,
    restaurantList: []
  };

  getDatas = async () => {

    const {items} = {
      "lastBuildDate": "Tue, 25 Aug 2020 23:23:10 +0900",
      "total": 5,
      "start": 1,
      "display": 5,
      "items": [
          {
              "id":1,
              "title": "고미텐",
              "link": "https://www.instagram.com/gomi_ten",
              "category": "일식>일식당",
              "description": "",
              "telephone": "",
              "address": "대구광역시 수성구 만촌동 1036-1",
              "roadAddress": "대구광역시 수성구 동원로 6 1층",
              "mapx": "458046",
              "mapy": "362358"
          },
          {
              "id":2,
              "title": "더뷔페 앳 인터불고",
              "link": "http://www.hotel-interburgo-daegu.com",
              "category": "음식점>뷔페",
              "description": "",
              "telephone": "",
              "address": "대구광역시 수성구 만촌동 57-23",
              "roadAddress": "대구광역시 수성구 팔현길 212 호텔인터불고",
              "mapx": "459806",
              "mapy": "363885"
          },
          {
              "id":3,
              "title": "티제이버거",
              "link": "http://www.instagram.com/tjhamburger",
              "category": "음식점>햄버거",
              "description": "",
              "telephone": "",
              "address": "대구광역시 수성구 만촌동 424-1",
              "roadAddress": "대구광역시 수성구 화랑로2길 114 1층",
              "mapx": "457695",
              "mapy": "363290"
          },
          {
              "id":4,
              "title": "카페코지<b>만촌</b>",
              "link": "http://www.instagram.com/caphecozy_manchon/",
              "category": "음식점>카페,디저트",
              "description": "",
              "telephone": "",
              "address": "대구광역시 수성구 만촌동 415-6",
              "roadAddress": "대구광역시 수성구 화랑로2길 47",
              "mapx": "457388",
              "mapy": "363329"
          },
          {
              "id":5,
              "title": "오구식탁",
              "link": "http://www.instagram.com/59table",
              "category": "음식점>이탈리아음식",
              "description": "",
              "telephone": "",
              "address": "대구광역시 수성구 만촌동 859-32",
              "roadAddress": "대구광역시 수성구 교학로2길 24 1층 오구식탁",
              "mapx": "459077",
              "mapy": "361882"
          }
        ]
      }

      this.setState({ restaurantList: items, isLoading: false });
  };

  componentDidMount() {
    this.getDatas();
  }

  render() {
    const { isLoading, restaurantList } = this.state;
    return (
    <div> 
      <AppBar />
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

export default App;