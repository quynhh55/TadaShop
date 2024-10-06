// import React from 'react'
import "./ProductList.scss"
import Products from "../../components/Products/Products"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });
    };
    console.log("filters",filters);
  return (
    <div className='productList'>
        <h1>{cat}</h1>
        <div className="filterContainer">
            <div className="filter">
                <span className="filterText">
                    Filter Products:
                </span>
                <select className="selectProduct" name="color" onChange={handleFilters}>
                    <option className="filter-color" value="white">white</option>
                    <option className="filter-color" value="black">black</option>
                    <option className="filter-color" value="red">red</option>
                    <option className="filter-color" value="blue">blue</option>
                    <option className="filter-color"value="green">green</option>
                    <option className="filter-color" value="yellow">yellow</option>
                </select>
                <select className="size" name="size" onChange={handleFilters}>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div className="filter">
                <span className="filterText">
                    Sort Products:
                </span>

                <select className="selectNewletter" name="asc" onChange={e => setSort(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="asc">Price (asc)</option>
                    <option value="desc">Price (desc)</option>
                </select>
            </div>
        </div>
        <Products cat={cat} filters = {filters} sort={sort} />  
    </div>
  )
}

export default ProductList