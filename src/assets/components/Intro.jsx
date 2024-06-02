import React from 'react'
import "./Intro.css"
import { Fade } from "react-awesome-reveal";
import video from "../../../video/video_1.mp4"
const Intro = () => {
    return (
        <>
            <div className="video">
                <video autoPlay muted loop id="bg-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>

                <div className="intro-content">
                    <Fade cascade damping={0.09} >
                        <div className='intro-center'>
                            <h1 className='intro-title'>Hello, I'm <span className='name'>Gian Claudio S</span></h1>
                            <h2 className='intro-job'>I'm a Full Stack Developer</h2>
                            <p className='intro-description'>
                            Currently based in London, I've recently completed the intensive web development course at Le Wagon Bootcamp. My expertise lies in crafting efficient development tools and workflows, ensuring users can maximize their experience
                            </p>
                        </div>
                    </Fade>


                </div>
            </div>

        </>
    )
}

export default Intro