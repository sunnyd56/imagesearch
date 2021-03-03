import { render } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

ReactDom.render(<App />, document.querySelector("#root"));
