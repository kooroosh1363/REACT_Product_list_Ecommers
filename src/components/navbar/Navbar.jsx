import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsXSquare } from "react-icons/bs";
import { BsTextCenter } from "react-icons/bs";
import "./Navbar.css"
import Btn from '../button/Btn';
import logo from "../../assets/img/raad.png"



const Navbar = () => {
    // scroll for top position
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar")
        navbar.classList.toggle("active", window.scrollY > 100)
    })

    const [Mobile, setMobile] = useState(false)


    return (
        <>
            <nav className="navbar">
                <div className="container dis_flex">

                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="nav_link">
                        {/* <ul className="f_flex link uppercase"> */}

                        <ul className={Mobile ? "mobile_link" : "link f_flex uppercase"} onClick={() => setMobile(false)}>

                            <li><a href="#home">Home</a></li>
                            <li><a href="#Features">Features</a></li>
                            <li><a href="#Portfolio">Portfolio</a></li>
                            <li><a href="#Resume">Resume</a></li>
                            <li><a href="#Clients">Clients</a></li>
                            <li><a href="#Blog">Blog</a></li>
                            <li><a href="#Contact">Contact</a></li>
                            <li><Btn /></li>
                        </ul>


                        <button className='toggle' onClick={() => setMobile(!Mobile)}>

                            {Mobile ?
                                <BsXSquare className='close btn_c'></BsXSquare> :
                                <BsTextCenter className='open btn_o'></BsTextCenter>
                            }


                        </button>
                    </div>
                </div>
            </nav >


            <section className="demo"></section>
        </>
    )
}

export default Navbar