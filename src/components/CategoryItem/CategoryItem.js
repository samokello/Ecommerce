import { ListItem } from "@mui/material";
import React from "react";
const CategoryItem=({item})=>{
    return(
<div className="product">

<div className="category-image">
<img src={item.img}/>
</div>

<div className="category-infor">
    <h1>{item.title}</h1>


<div className="shop-now">
<button className="btn-green">shop now</button>

</div>

</div>

</div>

    )
}

export default CategoryItem