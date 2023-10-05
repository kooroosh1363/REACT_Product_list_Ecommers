import React from 'react'
import { Link } from 'react-router-dom'
import { BsXSquare } from "react-icons/bs";
import "./Navbar.css"
import Btn from '../button/Btn';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="container dis_flex">

            <div className="logo">
                <img src="" alt="" />
            </div>

            <div className="nav_link">
                <ul className="f_flex link uppercase">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Resume">Resume</a></li>
                    <li><a href="#Clients">Clients</a></li>
                    <li><a href="#Blog">Blog</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><Btn/></li>
                </ul>
                

                <button><BsXSquare></BsXSquare></button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar