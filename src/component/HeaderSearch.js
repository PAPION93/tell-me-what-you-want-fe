import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Logo from "./logo";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  appBar: {
    backgroundColor: "white",
    boxShadow: "0 0 0 0",
    // boxShadow: "0 1px 5px 1px gray",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HeaderSearch() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Logo />
          <Typography variant="h6" className={classes.title}></Typography>
          <Button>로그인</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderSearch;
