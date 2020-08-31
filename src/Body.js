import React from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginLeft: 100,
    marginRight: 100,
    flexGrow: 1,
  },
  text_div: {
    border: "1px solid #B0B0B0",
    borderRadius: "5px",
    width: "100%",
  },
  text: {
    width: "40%",
  },
  mainPaper: {
    backgroundImage: `url(https://a0.muscache.com/im/pictures/d7cd51be-7197-45ba-ac5b-ce2db61787b0.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 750,
    borderRadius: "16px",
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
          <form className={classes.text_root} noValidate autoComplete="off">
            <div className={classes.text_div}>
              <TextField
                className={classes.text}
                id="outlined-search"
                label="맛집을 찾아볼까요?"
                type="search"
                variant="outlined"
              />
              <Button
                className={classes.button}
                variant="contained"
                size="large"
                color="primary"
              >
                검색
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.mainPaper}></Paper>
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
