import React from 'react';

import Sidebar from '../components/sidebar.js';
import LanguageLabel from '../components/language_label.js';

import '../common.scss';
import './projects.scss';

var data = {
  'projects' : [
    {
      'name' : 'Personal Website',
      'description' : 'The website you\'re looking at right now! After spending time learning React at my last job, \
                       I updated this website to use react for ease of use and production.',
      'link' : 'https://github.com/joshdegrazia/joshdegrazia.github.io',
      'technologies' : [
        { 'icon': 'devicons-react', 'text': 'React' },
        { 'icon': 'devicons-sass', 'text': 'Sass' },
        { 'icon': 'devicons-nodejs_small', 'text': 'Node' },
        { 'icon': 'devicons-nodejs_small', 'text': 'Webpack' },
      ]
    },
    {
      'name' : 'JSketch',
      'description' : 'A vector drawing program built off of Java. We used the Swing library to render objects \
                       to the window, where we allowed manipulating the shapes via key and mouse presses. For \
                       another project we created a new version of this program for Android using Android Studio.',
      'technologies' : [
        { 'icon': 'devicons-android', 'text': 'Android' },
        { 'icon': 'devicons-java', 'text': 'Java' },
        { 'icon': 'devicons-code_badge', 'text': 'Swing' }
      ]
    },
    {
      'name' : 'WLP4 Compiler',
      'description' : 'For CS 241 (Foundations of Sequential Programs), we built a compiler from the ground up. \
                       We started off by building an assembler that translated a set of MIPS commands \
                       into binary instructions. Then, we created a parser for a subset of the C language, \
                       then translated it into MIPS for our assembler to turn into binary.',
      'technologies' : [
        { 'icon': 'devicons-code', 'text': 'C' },
        { 'icon': 'devicons-code', 'text': 'C++' },
        { 'icon': 'devicons-terminal', 'text': 'Bash' }
      ]
    },
    {
      'name' : 'OS/161',
      'description' : 'For CS 350 (Operating Systems), our main task was to build a very basic \
                       command-line operating system called OS/161. It was our job to implement \
                       synchronization primitives and basic system calls so the system could solve \
                       concurrency problems, as well as building the OS\'s virtual memory system from \
                       the ground up.',
      'technologies' : [
        { 'icon': 'devicons-code', 'text': 'C' },
        { 'icon': 'devicons-terminal', 'text': 'Bash' }
      ]
    }
  ]
}

class ProjectsPage extends React.Component {
  renderProjectTechnologies(technologies) {
    return technologies.map((technology) =>
      <LanguageLabel text={technology.text} icon={technology.icon}/>
    );
  }

  renderProjectLink(project) {
    if (project.link) {
      return <a className='fa fa-github' href={project.link}/>
    }
  }

  renderProjects() {
    return data.projects.map((project) =>
      <div className='project-container'>
        <div className='title project-name'>
          {project.name}
          {this.renderProjectLink(project)}
        </div>
        <div className='project-technologies'>
          {this.renderProjectTechnologies(project.technologies)}
        </div>
        <div className='project-description'>{project.description}</div>
      </div>
    );
  }

  render() {
    return (
      <div className='root'>
        <Sidebar currentPage='projects'/>
        <div className='projects-page'>
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default ProjectsPage;