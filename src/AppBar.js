import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 130,
    marginRight: 145,
    '@media (max-width: 1128px)': {
      marginLeft: 10,
      marginRight: 30
    },
    '@media (max-width: 500px)': {
      marginLeft: 0,
      // display:"none"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 70,
    marginTop: 10,
    maxWidth: 200,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" class="default">
        <Toolbar>
          <Link href="/" className={classes.title}>
            <img
              src="logo.png"
              alt="logo"
              className={classes.logo}
            />
          </Link>
          <Button color="inherit">로그인</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
