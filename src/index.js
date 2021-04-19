import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { CWA_DIV } from "../config";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

ReactDOM.render(<App />, document.getElementById(CWA_DIV));
