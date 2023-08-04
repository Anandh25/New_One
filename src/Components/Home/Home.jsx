import React from 'react'
import './home.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {TbChevronsDown} from 'react-icons/tb'

const Home = () => {
  return (
    <section id='home' className='home section'>
      {/* this div will only display in wider screen */}
      <div className="leftIcons">
        <div className="socials grid">
          <a href='https://github.com/Anandh25/' target='_blank'>
            <AiFillGithub className='icon'/>
          </a>
          <a href='https://www.linkedin.com/in/anandhmanoharan-2592a913a/' target='_blank'>
            <AiFillLinkedin className='icon'/>
          </a>
          <a href='https://twitter.com/AnandhSai5' target='_blank'>
            <AiFillTwitterCircle className='icon'/>
          </a>
          <div className="line"></div>
        </div>
      </div>

      {/* home Content */}
      <div className="container homeContainer">

        <span className="introText">
          Hi My name is,
        </span>

        <h1 className='title'>
          Anandh Manoharan
        </h1>

        <span className="subTitle">
          I develope scalable web based applications ... !
        </span>

        <p className="homeParagraph">
          <br/>
          A Music in the background and a cup of coffee next to my machine where my keys are designing something.!
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>
          <div className="scrollDiv">
            <a href='#about' className='flex'>
              <h6 className='scroll'>Scroll Down </h6><TbChevronsDown className='icon'/>
            </a>
          </div>
        </div>
      </div>

      {/* right div,with email address will also display in wider screen only*/}

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href='https:mailto:anandhmanoharan@gmail.com' target='_blank'>anandhmanoharan@gmail.com</a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
