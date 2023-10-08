import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./Feature.css"
const Feature = () => {
  return (
    <>
      <section>
        <div className="top feature" id="Features">
          <div className="container">
            <div className="heading">
              <h4>Features</h4>
              <h1>What I Do</h1>
            </div>

            <div className="content grid">
              <div className="box ">
                <img src="" alt="" />

                <h2 className='title'>Title</h2>

                <p className='paraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, expedita itaque. Reiciendis, tempore distinctio voluptatibus odit tempora consequuntur quod nisi.</p>

                <a href="#">
                  <FaArrowRight className='arrow_right'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Feature;
