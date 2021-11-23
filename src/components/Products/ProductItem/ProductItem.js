import "./ProductItem.css"
import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
const ProductsItem=({item})=>{
    return(
    <div className="products">

<div className="product-images">
<div className="fav-icons">

<div className="icons">
    <FavoriteBorderOutlinedIcon />
    </div>

    <div className="icons">
    <SearchOutlinedIcon />
    </div>

    <div className="icons">
<AddShoppingCartOutlinedIcon />

</div>


</div>

    <img src={item.img}/>

<div className="empty-container">

</div>
    

</div>






    </div>

    )
}


export default ProductsItem