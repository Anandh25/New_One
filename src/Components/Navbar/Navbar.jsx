import React,{useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
//Code to toggle on and off the navbar at shorter width.

const [active, setActive] = useState('navBar')

//this will bring the navbar from top

const showNavBar = () =>{
  setActive('navBar activeNavBar')
}

//this will hide the navbar again

const removeNavBar = () =>{
  setActive('navBar') 
}

//code statement to add a background color to the header.
const [activeHeader,setactiveHeader] = useState('header')
const addBg = () =>{
  if(window.scrollY >= 10){
    setactiveHeader('header activeHeader')
  }
  else{
    setactiveHeader('header')
  }
}


window.addEventListener('scroll', addBg)
return (
   <header className={activeHeader}>
    <div className="logoDiv">
      <h1 className="logo">
        <a href='#home'>AM</a>
      </h1>
    </div>

    <div className={active}>
      <ul onClick={removeNavBar} className="navLists">
        <li className="navItem">
          <a href="#about" className="navLink"><span className='headerNumber'>1.</span>About</a>
        </li>

        <li className="navItem">
          <a href="#skills" className="navLink"><span className='headerNumber'>2.</span>Skills</a>
        </li>

        <li className="navItem">
          <a href="#projects" className="navLink"><span className='headerNumber'>3.</span>Projects</a>
        </li>

        <li className="navItem">
          <a href="#contact" className="navLink"><span className='headerNumber'>4.</span>Contact</a>
        </li>

        <button className="btn">
          <a href='MyResume.pdf' download='MyResume.pdf'>Resume</a>
        </button>
      </ul>

      <div onClick={removeNavBar} className="closeNavBar">
      <AiFillCloseCircle className='icon'/>
      </div>
    </div>

    <div onClick={showNavBar} className="toggleNavBar">
    <TbGridDots className='icon'/>
    </div>
   </header>
  )
}

export default Navbar
