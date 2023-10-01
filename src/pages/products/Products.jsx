import React from "react";
import styled from "./Products.module.css";
import { Navigate } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
function Products(){
    return(
        <div className="container">
            <Navbar title="RAAD SHOP"/>
            <h1>products</h1>
            
        </div>
    )
}

export default Products;