import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Logo from "./logo";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  logo: {
    height: 70,
    marginTop: 10,
    maxWidth: 200,
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  login: {
    "@media (max-width: 800px)": {
      display: "none",
    },
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
    textAlign: "center",
  },
  text: {
    marginTop: 10,
    width: "50%",
    color: "white",
    textAlign: "center",
    borderColor: "#FF5722",
    backgroundColor: "#FFFFFF",
    "@media (max-width: 1440px)": {
      width: "80%",
    },
    "@media ( max-width: 600px )": {
      height: "50px",
      width: "70%",
    },
    "@media ( max-width: 400px )": {
      width: "60%",
    },
  },
  button: {
    marginTop: 13,
    marginLeft: 10,
    borderRadius: 10,
    height: 50,
    "@media ( max-width: 600px )": {
      height: "44px",
    },
  },
  search_button_text: {
    width: 45,
    fontSize: 16,
    marginLeft: -10,
    fontWeight: 580,
  },
}));

function HeaderSearch() {
  const classes = useStyles();
  const [state, setState] = useState({ keyword: "" });

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Link href="/">
            <img src="logo.png" alt="logo" className={classes.logo} />
          </Link>
          <div className={classes.title}>
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

          {/* <Typography variant="h6" className={classes.title}></Typography> */}
          <Button className={classes.login}>로그인</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderSearch;
