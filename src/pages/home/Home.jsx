import React from 'react'
import "./Home.css"
// import { Nav } from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbar'
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ability from "../../assets/img/Machine-Learning-removebg-preview.png"
import ability1 from "../../assets/img/react-removebg-preview.png"
import ability2 from "../../assets/img/JavaScript-logo-removebg-preview.png"
import person from "../../assets/img/person1-removebg-preview.png"




const Home = () => {
  return (
    <>


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
                delaySpeed={1000} /></span>
            </h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem error debitis consequuntur aliquid a, suscipit commodi modi nisi ea, consequatur laborum molestiae, recusandae illo consectetur?</p>

            <div className="btn_home dis_flex">
              <div className='col_1'>
                <h4>You Can Fine Me :</h4>
                <div className="button">
                  <button className='btn_shadow'>
                    <FaFacebook className='icon'/>
                  </button>
                  <button className='btn_shadow'>
                    <FaLinkedin className='icon'/>
                  </button>
                  <button className='btn_shadow'>
                    <FaInstagram className='icon '/>
                  </button>
                </div>
              </div>


              <div className="col-1">
                <h4>Best Skill On</h4>
                <button className='btn_shodow'>
                  <img src={ability} alt="" />
                </button>

                <button className='btn_shodow'>
                  <img src={ability1} alt="" />
                </button>

                <button className='btn_shodow'>
                  <img src={ability2} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="image_right">
              <img src={person} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
