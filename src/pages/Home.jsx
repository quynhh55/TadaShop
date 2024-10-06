//import React from "react"
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";
import TopSelling from "../components/TopSelling/TopSelling";
const Home = () => {
  return (
    <div>
        <Slider/>
        <Categories />
        <Products />
        <TopSelling />
    </div>
  )
}

export default Home;