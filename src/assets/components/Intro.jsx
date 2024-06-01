import React from 'react'
import "./Intro.css"
import { Fade } from "react-awesome-reveal";

const Intro = () => {
    return (
        <div className='section d-flex flex-column align-items-center justify-content-center '>
            <Fade>
                <h1 className='row bg-danger'>Hi, I'm <span className='highlight'>Gian Clauidio S.</span></h1>
                <div className="row bg-success">
                    <p>I am currently base in London just graduated at Le Wagon Bootcamp,
                        in webdevelopent intense course.
                        I have a profound of developing tools and workflow,
                        and how users can get the best of if.</p>
                </div>      
            </Fade>

            </div >  
    )
}

export default Intro