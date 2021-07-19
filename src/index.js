import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";

import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import ProjectsPage from "./pages/projects";
import EducationPage from "./pages/education";

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
        <Route path="/" component={IndexPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/experience" component={ExperiencePage}/>
        <Route path="/projects" component={ProjectsPage}/>
        <Route path="/education" component={EducationPage}/>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
