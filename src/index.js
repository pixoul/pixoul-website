import React from "react";
import ReactDOM from "react-dom";
import App from "app/app";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'react-jss'

import theme from "styles/theme"
import "styles/fonts.scss";

const routing = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Route path="/" component={App} />
    </ThemeProvider>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import 'snippets.js';
