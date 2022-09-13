import React from "react";
import { useScrollTrigger } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ScrollHandler = props => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "10px 0px",
      backgroundImage: "unset"
    }
  });
};

const ScrollToColor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;
