import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 150,
    marginRight: 170,
    '@media (max-width: 1128px)': {
      marginLeft: 30,
      marginRight: 30
    },
    '@media (max-width: 500px)': {
      display:"none"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
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
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <img
              src="logo_transparent.png"
              alt="logo"
              className={classes.logo}
            />
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
