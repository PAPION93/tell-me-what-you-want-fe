import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 150,
    marginRight: 170,
    "@media (max-width: 1128px)": {
      marginLeft: 30,
      marginRight: 30,
    },
    "@media ( max-width: 500px )": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  searchDiv: {
    paddingTop: "30px",
  },
  text: {
    width: "90%",
    color: "white",
    textAlign: "center",
    borderWidth: 0,
    borderRadius: 20,
    borderColor: "#FF5722",
    backgroundColor: "#FFFFFF",
    "@media (max-width: 1440px)": {
      width: "80%",
    },
    "@media ( max-width: 600px )": {
      width: "70%",
    },
    "@media ( max-width: 400px )": {
      width: "60%",
    },
  },
  button: {
    marginTop: 3,
    marginLeft: 10,
    borderRadius: 10,
    height: 50,
  },
  search_button_text: {
    width: 45,
    fontSize: 16,
    marginLeft: -10,
    fontWeight: 580,
  },
  title_div: {
    textAlign: "left",
    marginTop: "30px",
    marginLeft: "30px",
  },
  mainPaperSpan: {
    fontSize: 26,
    fontWeight: 800,
    color: "white",
  },
  mainPaper: {
    height: "550px",
    textAlign: "center",
    borderRadius: "16px",
    background: "content-box",
    backgroundImage: `url(https://a0.muscache.com/im/pictures/d7cd51be-7197-45ba-ac5b-ce2db61787b0.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    "@media (max-width: 1440px)": {
      height: "415px",
    },
    "@media (max-width: 1128px)": {
      height: "376px",
    },
    "@media ( max-width: 500px )": {
      borderRadius: "16px",
      backgroundImage: `url(https://a0.muscache.com/im/pictures/17ec9365-19d8-49ab-ac19-2e77b458057e.jpg?im_w=720)`,
      height: "400px",
    },
  },
  card: {
    borderRadius: "16px",
  },
  media: {
    height: 300,
  },
}));

function Body() {
  const classes = useStyles();
  const [state, setState] = useState({ keyword: "" });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.mainPaper} elevation={3}>
            <div className={classes.searchDiv}>
              <TextField
                className={classes.text}
                id="outlined-search"
                label="맛집을 찾아볼까요?"
                type="search"
                variant="outlined"
                value={state.keyword}
                onChange={(e) => setState({ keyword: e.target.value })}
              />
              <Link to={`/search?keyword=${state.keyword}`}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<SearchIcon />}
                >
                  <span className={classes.search_button_text}>검색</span>
                </Button>
              </Link>
            </div>
            <div className={classes.title_div}>
              <span className={classes.mainPaperSpan}>
                이제, 맛집은
                <br />
                가까운 곳에서.
              </span>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                맛집을
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                열심히
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                차자보자
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Body;
