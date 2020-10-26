import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./component/HeaderSearch";
import Map from "./component/Map";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  grid_root: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  card: {
    boxShadow: "none",
  },
  cardMedia: {
    height: 180,
    borderRadius: "10px",
  },
  cardContent: {
    verticalAlign: "bottom",
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 5,
  },
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const classes = useStyles();
  const keyword = useQuery().get("keyword");

  const [restaurants, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurants = async () => {
    try {
      setError(null);
      setRestaurant(null);
      setLoading(true);
      const response = await axios.get(
        "http://127.0.0.1:10080/api/v1/restaurants-images?",
        {
          params: {
            query: keyword,
            display: 20,
            start: 1,
          },
        }
      );
      setRestaurant(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!restaurants) return null;

  return (
    <div className={classes.root}>
      <Header />
      <Grid container spacing={2} className={classes.grid_root}>
        <Grid
          container
          item={true}
          spacing={2}
          xs={12}
          sm={6}
          className={classes.grid_root}
        >
          {restaurants.map((restaurant) => (
            <Grid item lg={4} md={6} xs={12} key={restaurant.id}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia}>
                  <Slider {...settings}>
                    {restaurant.images.map((image) => (
                      <div key={image.id}>
                        <img
                          src={`http://127.0.0.1:10080/api/v1/images/${image.hash_name}`}
                          alt={image.original_name}
                          className="slickImage"
                          height="180"
                          width="100%"
                        />
                      </div>
                    ))}
                  </Slider>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="caption"
                    color="textPrimary"
                    component="p"
                    noWrap
                  >
                    <StarIcon
                      color="secondary"
                      fontSize="small"
                      style={{ verticalAlign: "bottom" }}
                    />
                    4.76 (120)
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    component="p"
                    noWrap
                  >
                    {restaurant.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    component="p"
                    noWrap
                  >
                    {restaurant.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}
