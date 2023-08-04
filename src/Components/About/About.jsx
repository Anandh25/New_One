import React from 'react'
import './about.css'
import {TbCloudDownload} from 'react-icons/tb'
import img from '../../Assets/2.jpg'

const About = () => {
  return (
   <section id='about' className='about'>

   <div className="sectionTitle">
    <span className='titleNumber'>
      01.
    </span>
    <h5 className='titleText'>About Me
      <div className='underline'>
        <span></span>
      </div>
    </h5>
   </div>

    <div className="sectionContent grid">
      <div className="textSection">
        <h4>
          I'm a success-driven, determined web developer.I have experience in HTML Sass Javascript and PHP to build accessible component based web pages and systems. <br/>
          Ability to give quality results while collaborating in rapidly changing environments and team compositions.<br/>
          A passionate person willing to learn more technologies to become a better developer than i was yesterday.So determined and result oriented.
        </h4>


        <div className="aboutBtn">
          <a href="MyResume.pdf" download='MyResume.pdf' className="flex">
            Download Resume <TbCloudDownload className='icon'/>
          </a>
        </div>
      </div>

      <div className="aboutImgDiv">
        <img src={img} alt="Anandh Manoharan" className="aboutImg" />
      </div>

    </div>
   </section>
  )
}

export default About
