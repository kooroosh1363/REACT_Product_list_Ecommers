import React from "react";
// import styles from "./Lists.module.css";
import list_product from "../../data/data_list_product";
import "./Lists.css"

function Lists() {

    let listProducts = list_product.map((item) =>
        <div className="cards col-12 col-sm-6 col-lg-4 mb-18" key={item.id}>
            <div className="card">
                <div className="card_img">
                    <img src={process.env.PUBLIC_URL + item.image} alt={item.name_product} />
                </div>

                <div className="body_card">
                    <h2>{item.name_product}</h2>
                    <p>{item.description}</p>

                    <div className="section_price">
                        <div className="sizes">
                            <span>{item.sizes.S}</span>
                            <span>{item.sizes.M}</span>
                            <span>{item.sizes.L}</span>
                            <span>{item.sizes.XL}</span>
                        </div>

                        <div className="price">
                            <span>{item.currency}</span>
                            <h3>{item.price}</h3>
                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="btn_atc">Add To Cart</div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="row">
            {listProducts}
        </div>
    )
};


export default Lists;