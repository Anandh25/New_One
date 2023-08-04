import React from 'react'
import './skills.css'
import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {SiMysql} from 'react-icons/si'
import {ImFileExcel} from 'react-icons/im'

const Skills = () => {
  return (
    <section id='skills' className='skills container section'>
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className='titleText'>Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      {/* skills container */}
      <div className="skillContainer grid">
        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            {/* <span className="subTitle">
              2 Years Experience
            </span> */}
          </div>

          <div className="generalSkills">
            {/* Single skill div */}

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className='icon'/>
              </div>
              <span className='skillName'>React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className='icon'/>
              </div>
              <span className='skillName'>JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className='icon'/>
              </div>
              <span className='skillName'>Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className='icon'/>
              </div>
              <span className='skillName'>CSS</span>
            </div>
          
          
          <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className='icon'/>
              </div>
              <span className='skillName'>HTML</span>
            </div>
          
            </div>
          
        </div>
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            {/* <span className="subTitle">
              2 Years Experience
            </span> */}
          </div>

          <div className="generalSkills">
            {/* Single skill div */}

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className='icon'/>
              </div>
              <span className='skillName'>Github</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMysql className='icon'/>
              </div>
              <span className='skillName'>MySQL</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <ImFileExcel className='icon'/>
              </div>
              <span className='skillName'>Excel</span>
            </div>
          
            </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default Skills
