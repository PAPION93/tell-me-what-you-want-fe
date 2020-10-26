import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  title: {
    // flexGrow: 1,
  },
  logo: {
    height: 70,
    marginTop: 10,
    maxWidth: 200,
    "@media (max-width: 500px)": {
      width: 100,
      height: 40,
      marginRight: 0,
    },
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <Link href="/" className={classes.title}>
      <img src="logo.png" alt="logo" className={classes.logo} />
    </Link>
  );
}

export default Logo;
