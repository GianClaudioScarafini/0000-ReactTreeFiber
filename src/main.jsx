import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Intro from './assets/components/Intro.jsx'
import Experience from './assets/components/Experience.jsx' 
import Education from './assets/components/Education.jsx'
import Skills from './assets/components/Skills.jsx'
import About from './assets/components/About.jsx'
//import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro />
    <About />
    <Skills />
    <Experience />
    <Education />
  </React.StrictMode>,
)
