/* jshint esversion: 6 */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import IndexPage from "javascript/pages/index";
import AboutPage from "javascript/pages/about";
import ExperiencePage from "javascript/pages/experience";
import ProjectsPage from "javascript/pages/projects";
import EducationPage from "javascript/pages/education";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={IndexPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/experience" component={ExperiencePage}/>
    <Route path="/projects" component={ProjectsPage}/>
    <Route path="/education" component={EducationPage}/>
  </Router>, document.body
);