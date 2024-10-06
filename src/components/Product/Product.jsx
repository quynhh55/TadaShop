// import React from 'react'
import { SearchOutlined, ShoppingCartOutlined,HeartOutlined } from '@ant-design/icons';
import "./Product.scss"
import { Link } from 'react-router-dom';

const Product = ({item}) => {
  return (
    <div className="product">
        <div className="circle">

        </div>
        {/* <img src={`/img/AO_Bong_Da/${item.img}`} alt="" /> */}
        <img src={`${item.img}`} alt="" />

        <div className="info">
            <div className="icon">
                <ShoppingCartOutlined /> 
            </div>
            <div className="icon">
                <Link to={`/product/${item._id}`}>
                    <SearchOutlined />
                </Link>
                
            </div>
            <div className="icon">
                <HeartOutlined />
            </div>
        </div>
    </div>
  )
}

export default Product