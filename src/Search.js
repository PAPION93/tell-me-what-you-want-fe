import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  card_root: {
    borderRadius: "16px",
  },
  media: {
    height: 300,
  },
}));

export default function Search() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
        <Grid container spacing={3}>
          <Grid item xs={6}>
              
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
    </div>
  );

  }