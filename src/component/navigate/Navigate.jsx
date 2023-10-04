import "./Navigate.css";
import React from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { BsFillBasketFill   } from "react-icons/bs";
import img from "../../assets/raad.png"


function Navigate (){
    return(
        
        <div className="container head">
            <header>
                <div className="menus">
                <BsMenuButtonWideFill  className="menu"/>
                </div>

                <div className="logo">
                    <img src={img} alt="logo"/>
                </div>

                <div className="cart">
                    <BsFillBasketFill className="cart"/>
                </div>

                
                
            </header>
        </div>
    );
}


export default Navigate;

