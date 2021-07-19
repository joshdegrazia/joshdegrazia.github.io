import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import ProjectsPage from "./pages/projects";
import EducationPage from "./pages/education";

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Route exact path="/"><IndexPage/></Route>
        <Route path="/about"><AboutPage/></Route>
        <Route path="/experience"><ExperiencePage/></Route>
        <Route path="/projects"><ProjectsPage/></Route>
        <Route path="/education"><EducationPage/></Route>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
