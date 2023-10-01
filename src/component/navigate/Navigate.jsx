import styled from "./Navigate.module.css";
import React from "react";
import { BsMenuButtonWideFill   } from "react-icons/bs";
import { BsFillBasketFill   } from "react-icons/bs";
import img from "../../images/raad.png"


function Navigate (){
    return(
        
        <div className="container">
            <header>
                <div className={styled.menu}>
                <BsMenuButtonWideFill />
                </div>

                <div className={styled.logo}>
                    <img src={img} alt="logo"/>
                </div>

                <div className={styled.cart}>
                    <BsFillBasketFill/>
                </div>

                
                
            </header>
        </div>
    );
}


export default Navigate;

