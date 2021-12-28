import React from "react";
import ReactDOM from "react-dom";
import Root from "./root.component";
import { glazeReact } from "glaze-ui";
import { hot } from "react-hot-loader/root";

export default glazeReact(
  hot(Root), 
  React, 
  ReactDOM
);