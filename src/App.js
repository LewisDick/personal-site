import React from 'react';
import './App.scss';
import { experience, technologies, socials, education } from './data.js'

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Lewis Dick</h1>
      
      <h4>Experience</h4>
      <ul id="experience">
        { Object.keys(experience).map((job) => <li>{job}<span className="experience-date">{experience[job]}</span></li>) }
      </ul>

      <h4 id="education">Education</h4>
      <ul>
      { education.map((pos) => <li>{pos}</li>) }
      </ul>

      <h4>Technologies</h4>
      <ul id="technologies">
        { technologies.map((tech) => <li>{tech}</li>) }
      </ul>
      
      {/* Projects Currently Listening*/}
    
      <ul id="socials">
        { Object.keys(socials).map((social) => <li><a href={socials[social]}>{social}</a></li>) }
      </ul>
      </div>
    </div>
  );
}

export default App;
