import React from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginLeft: 150,
    marginRight: 170,
    '@media (max-width: 1128px)': {
      marginLeft: 30,
      marginRight: 30
    },
    '@media ( max-width: 500px )': {
      marginLeft: 0,
      marginRight: 0,
    }
  },
  text: {
    marginTop:"30px",
    width:"95%",
    color: "white",
    textAlign: 'center',
    borderWidth: 0,
    borderRadius: 30 ,
    borderColor: '#FF5722',
    backgroundColor : "#FFFFFF",
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
    '@media (max-width: 1440px)': {
      height: "415px"
    },
    '@media (max-width: 1128px)': {
      height: "376px"
    },
    '@media ( max-width: 500px )': {
      borderRadius: "0px",
      backgroundImage: `url(https://a0.muscache.com/im/pictures/17ec9365-19d8-49ab-ac19-2e77b458057e.jpg?im_w=720)`,
      height: "400px"
    }
  },
  subPaper: {
    textAlign: "center",
    height: "350px",
    minWidth: "220px",
    borderRadius: "16px",
    background: "content-box",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundImage: `url(https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720)`,
    '@media (max-width: 1440px)': {
      height: "255px"
    },
    '@media (max-width: 1128px)': {
      height: "200px"
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.mainPaper} elevation={3}>
            {/* <TextField className={classes.text} id="filled-search" label="맛집을 찾아볼까요?" type="search" variant="filled" /> */}
            <TextField
                className={classes.text}
                id="outlined-search"
                label="맛집을 찾아볼까요?"
                type="search"
                variant="outlined"
              />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.subPaper} elevation={3}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.subPaper} elevation={3}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.subPaper} elevation={3}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
