import React from 'react'
import "./Home.css"
// import { Nav } from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbar'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  return (
    <>
      <Navbar/>

      <section className="home" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Welcome To My World</h3>
            <h1>
              Hi , I'm <span>Jhon Doe</span>
            </h1>
            <h2>
              a <span><Typewriter words={['Excelent coder.', 'developer']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}/></span>
            </h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem error debitis consequuntur aliquid a, suscipit commodi modi nisi ea, consequatur laborum molestiae, recusandae illo consectetur?</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
