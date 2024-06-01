import React from 'react'
import "./About.css"
const About = () => {
    return (
        <div className='section d-flex align-items-center justify-content-center row about-color'>
            <div className='row about'>
                <div className='col-5 text-end  '>
                    <h3>About</h3>
                    <h5>Give a brief summary of information about me.</h5>
                </div>
                <div className='row col-5 text-end text-'>
                    <h6 className='text-start'>
                        I am currently working in the construction industry as a BIM Coordinator, managing various types of projects. I recently graduated from Le Wagon, where I developed a strong interest in web applications and tool creation.
                        My interest in coding began when I realized how it could drastically speed up the completion of small tasks. I started by using Python within visual programming tools and then moved on to creating small web scraping projects. Once I began, I discovered my passion for coding and decided to invest my time and resources into developing this skill further.
                    </h6>

                </div>




            </div>
        </div>
    )
}

export default About