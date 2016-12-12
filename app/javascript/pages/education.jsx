import React from 'react';
import Sidebar from 'javascript/components/sidebar';
import 'styles/common';

var data = {
  'terms': [
    {
      'code': '1A',
      'season': 'Fall',
      'year': '2013',
      'courses': [
        {
          'name': 'Introduction to Accounting',
          'subject': 'AFM',
          'code': '101'
        },
        {
          'name': 'Designing Functional Programs',
          'subject': 'CS',
          'code': '135'
        },
        {
          'name': 'Introduction to Microeconomics',
          'subject': 'ECON',
          'code': '101'
        },
        {
          'name': 'Algebra for Honours Mathematics',
          'subject': 'MATH',
          'code': '135'
        },
        {
          'name': 'Calculus 1 for Honours Mathematics',
          'subject': 'MATH',
          'code': '137'
        }
      ]
    },
        {
      'code': '1B',
      'season': 'Winter',
      'year': '2014',
      'courses': [
        {
          'name': 'Introduction to Managerial Accounting',
          'subject': 'AFM',
          'code': '102'
        },
        {
          'name': 'Elementary Algorithm Design and Data Abstraction',
          'subject': 'CS',
          'code': '136'
        },
        {
          'name': 'Introduction to Macroeconomics',
          'subject': 'ECON',
          'code': '102'
        },
        {
          'name': 'Linear Algebra 1 for Honours Mathematics',
          'subject': 'MATH',
          'code': '136'
        },
        {
          'name': 'Calculus 2 for Honours Mathematics',
          'subject': 'MATH',
          'code': '138'
        }
      ]
    },
        {
      'code': '2A',
      'season': 'Fall',
      'year': '2014',
      'courses': [
        {
          'name': 'Introduction to Business Organization',
          'subject': 'BUS',
          'code': '111W'
        },
        {
          'name': 'Logic and Computation',
          'subject': 'CS',
          'code': '245'
        },
        {
          'name': 'Object-Oriented Software Development',
          'subject': 'CS',
          'code': '246'
        },
        {
          'name': 'Introduction to Combinatorics',
          'subject': 'MATH',
          'code': '239'
        },
        {
          'name': 'Probability',
          'subject': 'STAT',
          'code': '230'
        }
      ]
    },
        {
      'code': '2B',
      'season': 'Winter',
      'year': '2015',
      'courses': [
        {
          'name': 'Data Structures and Data Management',
          'subject': 'CS',
          'code': '240'
        },
        {
          'name': 'Foundations of Sequential Programs',
          'subject': 'CS',
          'code': '241'
        },
        {
          'name': 'Computer Organization and Design',
          'subject': 'CS',
          'code': '241'
        },
        {
          'name': 'Communications in Mathematics & Computer Science',
          'subject': 'ENGL',
          'code': '119'
        },
        {
          'name': 'Statistics',
          'subject': 'STAT',
          'code': '231'
        }
      ]
    },
        {
      'code': '3A',
      'season': 'Fall',
      'year': '2015',
      'courses': [
        {
          'name': 'Algorithms',
          'subject': 'CS',
          'code': '341'
        },
        {
          'name': 'Introduction to Database Management',
          'subject': 'CS',
          'code': '348'
        },
        {
          'name': 'Introduction to Optomization',
          'subject': 'CO',
          'code': '250'
        },
        {
          'name': 'Public Speaking',
          'subject': 'MATH',
          'code': '135'
        }
      ]
    },
        {
      'code': '3B',
      'season': 'Spring',
      'year': '2016',
      'courses': [
        {
          'name': 'User Interfaces',
          'subject': 'CS',
          'code': '349'
        },
        {
          'name': 'Operating Systems',
          'subject': 'CS',
          'code': '350'
        },
        {
          'name': 'Numeric Computation',
          'subject': 'CS',
          'code': '370'
        },
        {
          'name': 'Introduction to Scheduling',
          'subject': 'CO',
          'code': '454'
        }
      ]
    }
  ]
}

class EducationPage extends React.Component {

  renderCourses(term) {
    return term.courses.map(
      (course) => (
        <div className='course-container'>
          {course.subject} {course.code} - {course.name}
        </div>
      )
    )
  }

  renderTerms() {
    return data.terms.map(
      (term) => (
        <div className='term-container'>
          <div className='term-name'>{term.season} {term.year}</div>
          <div className='courses'>
            {this.renderCourses(term)}
          </div>
        </div>
      )
    )
  }

  render() {
    return (
      <div className='root'>
        <Sidebar currentPage='education'/>
        <div className='education-page'>
          {this.renderTerms()}
        </div>
      </div>
    );
  }
}

export default EducationPage;