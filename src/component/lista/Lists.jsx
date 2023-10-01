import React from "react";
// import styles from "./Lists.module.css";
import list_product from "../../data/data_list_product";


function Lists(){

    let listProducts = list_product.map((item) => {
        <div className="col-12 col-sm-6 col-lg-4 mb-18" key={item.id}>
            <div className="card">
                <div className="card_img">
                    <img src={item.image} />
                </div>

                <div className="body_card">
                    <h2>{item.name_product}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
        });

    return(
        <div>
                lists
        </div>
    );
};


export default Lists;