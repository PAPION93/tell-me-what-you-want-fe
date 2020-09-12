import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Logo from './logo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    // backgroundColor: 'yellow',
  },
  appbar: {
    boxShadow: "0 2px 5px 10px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function HeaderSearch() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" class="default" className={classes.appbar}>
        <Toolbar>
          <Logo />
          <Button color="inherit">로그인</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderSearch;