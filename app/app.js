/* jshint esversion: 6 */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import Index from "./app/javascript/index";
import AboutPage from "./app/javascript/about_page";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/about" component={AboutPage}/>
  </Router>, document.body
);