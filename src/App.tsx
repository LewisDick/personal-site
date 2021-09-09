import React, { useState } from 'react'
import './App.scss'
import { Experience } from './Experience'
import { Photography } from './Photography'

enum ComponentType {
  Home,
  Experience,
  Photography,
}

function App() {
  const [component, setComponent] = useState(ComponentType.Experience)

  const handleClick = (v: ComponentType) => {
    setComponent(v)
  }

  return (
    <div className="App">
      <div className="nav">
        <ul>
          {/* <li onClick={() => handleClick(ComponentType.Home)}>Home</li> */}
          <li onClick={() => handleClick(ComponentType.Experience)}>
            Experience
          </li>
          <li onClick={() => handleClick(ComponentType.Photography)}>
            Photography
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="wrapper">
          <h1>Lewis Dick</h1>
          {component === ComponentType.Experience && <Experience />}
          {component === ComponentType.Photography && <Photography />}
        </div>
      </div>
    </div>
  )
}

export default App
