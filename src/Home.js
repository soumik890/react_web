import React from 'react'
import "./Home.css"
import logo from "./img/logo.png" 
function Home() {
  //fixed header

  return (
    <div className='home'>
        <div className='home__bg'>
          <div className='header d__flex align__items__center pxy__30'>
              <div className='logo'>
                <img className='logo1' src={logo} alt=""/>
              </div>
              <div className="navigation pxy__30">
                <ul className="navbar d__flex">
                  <a href="#Home"><li className='nav__items mx__15'>Home</li></a>
                  <a href="#About"><li className='nav__items mx__15'>About</li></a>
                  <a href="#Hobbies"><li className='nav__items mx__15'>Hobbies</li></a>
                  <a href="#Contact"><li className='nav__items mx__15'>Contact</li></a>
                </ul>
              </div>
          </div>
          {/*home content */}
          <div className="container">
          <div className="home__content"></div>
          <div className="home__meta">
            <h1 className='text home__text pz__10'>Welcome to my world...</h1>
            <h2 className='home__text pz__10'>Hi !! myself Soumik</h2>
            <h3 className='home__text sweet'>Technology enthusiast</h3>
          </div>
        </div>
        </div>
     </div>
  )
}

export default Home