import styled from "./Navigate.module.css";
import React from "react";
import { BsMenuButtonWideFill   } from "react-icons/bs";



function Navigate (){
    return(
        
        <div className="container">
            <header>
                <div className="menu">
                <BsMenuButtonWideFill />
 
                </div>
            </header>
        </div>
    );
}


export default Navigate;

