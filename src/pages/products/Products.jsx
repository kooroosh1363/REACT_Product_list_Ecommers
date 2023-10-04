import React from "react";
import styled from "./Products.module.css";
import Navigate from "../../component/navigate/Navigate";
import Navbar from "../../component/navbar/Navbar";
import Lists from "../../component/lista/Lists";
import Loader from "../../component/loader/Loader";
function Products() {
    return (
        <>
            <Navbar title="RAAD SHOP" />


            <Navigate />
            <div className={styled.list_pro_container}>
                <div className="container">
                    <Lists/>
                    <div className="row mt-4 pb-4">
                        <div className="col-12">
                            <Loader/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Products;