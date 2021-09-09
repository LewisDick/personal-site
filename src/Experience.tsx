import { education, experience, socials, technologies } from './data'
import React from 'react'
import './Experience.scss'

export const Experience = () => (
  <div className="experience">
    <h1>Lewis Dick</h1>
    <h4>Experience</h4>
    <ul id="experience">
      {Object.keys(experience).map((job) => (
        <li>
          {job}
          <span className="experience-date">{experience[job]}</span>
        </li>
      ))}
    </ul>

    <h4 id="education">Education</h4>
    <ul>
      {education.map((pos) => (
        <li>{pos}</li>
      ))}
    </ul>

    <h4>Technologies</h4>
    <ul id="technologies">
      {technologies.map((tech) => (
        <li>{tech}</li>
      ))}
    </ul>

    {/* Projects Currently Listening*/}

    <ul id="socials">
      {Object.keys(socials).map((social) => (
        <li>
          <a href={socials[social]}>{social}</a>
        </li>
      ))}
    </ul>
  </div>
)
