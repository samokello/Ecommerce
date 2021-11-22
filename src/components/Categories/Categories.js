import React from "react";
import "./Categories.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import {categories} from "../../data";
const Categories= () => {
  return (
    

    <div className="category-contaner">
      {
      categories.map(item=>{
return(
<div className="category-content">
  <CategoryItem item={item}/>
  </div>
)
      })
    }

</div>
  
  );
};
export default Categories;