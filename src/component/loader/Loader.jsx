import React from "react";
import styled from "./loader.module.css";


function Loader(){
    return(
        <div className={styled.loader}>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--text"></div>
                
        </div>
    );
};

export default Loader;