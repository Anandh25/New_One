import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import './projects.css'
import {FiGithub} from 'react-icons/fi'
import img from '../../Assets/movie.png'
import img1 from '../../Assets/myportfolioimg.png'


const data = [
  {
    id: 1,
    image: img,
    github: 'https://github.com/Anandh25/UPGRAD_MOVIE_APP',
    title: 'Movie Booking App',
    desc:'This is an website where the users can browse upcoming and released movies and so on...',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 2,
    image: img1,
    github: 'https://github.com/Anandh25/MyPortfolio',
    title: 'My Portfolio',
    desc:'This is all about me and it is my first portfolio',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  }
]

const Projects = () => {
  return (
    <section id='projects' className='projects container section'>
      <div className="sectionTitle">
    <span className='titleNumber'>
      03.
    </span>
    <h5 className='titleText'>Projects
      <div className='underline'>
        <span></span>
      </div>
    </h5>
   </div>

    <div className="projectContainer grid">
      {
        data.map(({id, image, github, title, desc, tech1, tech2, tech3}) =>{
          return(
            <div key={id} className="singleProject">
              <div className="externalLinks flex">
                <div className="githubIcon">
                  <a href={github} target='_blank'>
                    <FiGithub className='icon'/>
                  </a>
                </div>
              </div>

              <div className="imgDiv">
                <a href='' target='_blank'>
                  <img src={image} alt={title} />
                </a>
              </div>

              <div className="projectTitle">
                <h3>{title}</h3>
              </div>

              <div className="desc">
                {desc}
              </div>

              <div className="technologies flex">
                <small>{tech1}</small>
                <small>{tech2}</small>
                <small>{tech3}</small>
              </div>
            </div>
          )
        })
      }
    </div>



    </section>
  )
}

export default Projects
