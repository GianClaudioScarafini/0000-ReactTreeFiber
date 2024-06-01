import React from 'react'
import "./Intro.css"
import { Fade } from "react-awesome-reveal";

const Intro = () => {
    return (
        <Fade>
        <div className='section text-center d-flex'>
            <h1>Hi, I'm <span className='highlight'>Gian Clauidio S.</span></h1>
            <p>Software Engineer</p>
        </div>
        </Fade>
    )
}

export default Intro