import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  mapDiv: {
    borderRadius: "10px",
  },
}));

export default function Map() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RenderAfterNavermapsLoaded ncpClientId={"wf42dlqgd0"}>
        <NaverMap
          className={classes.mapDiv}
          mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
          style={{
            width: "100%",
            height: "100%",
          }}
          defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
          defaultZoom={10}
        />
      </RenderAfterNavermapsLoaded>
    </div>
  );
}
