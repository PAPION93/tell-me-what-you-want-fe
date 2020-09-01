import React from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginLeft: 150,
    marginRight: 170,
    flexGrow: 1,
    '@media (max-width: 1128px)': {
      marginLeft: 30,
      marginRight: 30
    },
    '@media ( max-width: 500px )': {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 10,
    }
    
  },
  text: {
    width: "100%",
  },
  mainPaper: {
    background: "content-box",
    backgroundImage: `url(https://a0.muscache.com/im/pictures/d7cd51be-7197-45ba-ac5b-ce2db61787b0.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "750px",
    borderRadius: "16px",
    '@media (max-width: 1440px)': {
      height: "415px"
    },
    '@media (max-width: 1128px)': {
      height: "376px"
    },
    '@media ( max-width: 500px )': {
      borderRadius: "0px",
    }
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: "7px",
    marginRight: "5px",
    borderRadius: "8px",
    float: "right",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.text}
              id="outlined-search"
              label="맛집을 찾아볼까요?"
              type="search"
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.mainPaper}>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
