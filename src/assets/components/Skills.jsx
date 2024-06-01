import React from 'react'
import "./Skills.css"
import { Fade } from "react-awesome-reveal";
import { FaBeer,FaHtml5,FaCss3Alt} from 'react-icons/fa';
import { IoLogoJavascript, IoLogoReact, IoLogoNpm, IoGitBranchOutline, IoLogoGithub, IoLogoPython  } from "react-icons/io5";
import { SiRubyonrails,SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiVitess, SiHeroku } from "react-icons/si";


function Skills() {
  return (

    <div className='section'>


            <ul className='skills'>
                <Fade cascade damping={0.09}>
                <li><FaHtml5 className="SearchIcon" />html</li>
                <li><FaCss3Alt className="SearchIcon" />Css</li>
                <li><IoLogoJavascript className="SearchIcon" />javascript</li>
                <li><IoLogoReact className="SearchIcon" />React</li>
                <li><SiRubyonrails className="SearchIcon" />RoR</li>
                <li><IoLogoNpm className="SearchIcon" />npm</li>
                <li><SiPostgresql className="SearchIcon" />postgresql</li>
                <li><DiMongodb className="SearchIcon" />Mongodb</li>
                <li><IoGitBranchOutline className="SearchIcon" />git</li>
                <li><IoLogoGithub className="SearchIcon" />GitHub</li>
                <li><SiVitess className="SearchIcon" />Vite</li>
                <li><SiHeroku className="SearchIcon" />Heroku</li>
                <li><IoLogoPython className="SearchIcon" />Python</li>
                </Fade>
            </ul>

    </div>
  )
}

export default Skills