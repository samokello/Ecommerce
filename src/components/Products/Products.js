import React from "react";
import "./Products.css";
import ProductsItem from "./ProductItem/ProductItem";
import { popularProducts } from "../../data";

const Products=()=>{
    return(
    <div className="products-container">

{popularProducts.map(item=>{
    return(

    <ProductsItem item={item}/>



    )
})
}

    </div>
    )
}


export default Products