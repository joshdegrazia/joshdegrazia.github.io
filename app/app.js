/* jshint esversion: 6 */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import IndexPage from "./app/javascript/pages/index";
import AboutPage from "./app/javascript/pages/about";
import ExperiencePage from "./app/javascript/pages/experience";
import ProjectsPage from "./app/javascript/pages/projects";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={IndexPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/experience" component={ExperiencePage}/>
    <Route path="/projects" component={ProjectsPage}/>
  </Router>, document.body
);