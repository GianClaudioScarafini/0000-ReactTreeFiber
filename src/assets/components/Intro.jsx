import React from 'react'
import "./Intro.css"
import { Fade } from "react-awesome-reveal";

const Intro = () => {
    return (
        <div className='section'>
            <div className='canter'>
                <Fade cascade damping={0.09} >
                    <h1 className='intro'>Hello, I'm <span className='name'>Gian Claudio S</span></h1>
                    <h2 className='intro'>I'm a Full Stack Developer</h2>
                    <div>
                        <p className='p-5'>
                            I am currently base in London just graduated at Le Wagon Bootcamp,
                            in webdevelopent intense course.
                            I have a profound of developing tools and workflow,
                            and how users can get the best of if.
                        </p>
                    </div>
                </Fade>
            </div>
        </div >
    )
}

export default Intro