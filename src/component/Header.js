import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Logo from './logo';

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
      marginRight: 0,
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" class="default">
        <Toolbar>
          <Logo />
          <Button color="inherit">로그인</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;