import React from "react";
import ReactDOM from "react-dom";
import Root from "./root.component";
import { glazeReact } from "glaze-ui";

export const {mount, unmount} = glazeReact(
  Root,
  React, 
  ReactDOM
);