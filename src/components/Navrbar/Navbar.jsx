// import React from 'react'
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined, ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
// import { IMAGE_DEFAULT, TADA_SHOP,IMAGE_LINK } from "../../requestMethod";
import {IMAGE_DEFAULT,IMAGE_LINK,TADA_SHOP} from '../../requestMethod'



const Navbar = ({handleLogout}) => {
  console.log('handle', handleLogout);
  const quantity = useSelector(state => state.cart.count);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log('current', currentUser);
  //console.log("cart: ",cart);
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='left'>
          <span className="language">
            EN
          </span>
          <div className="search-container">
            <input type="text" />
            <SearchOutlined />
          </div>
        </div>
        <div className='center'>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="logo" >
              Tada Shop
            </h1>
          </Link>
        </div>
        <div className='right'>
          {!currentUser && <Link to="/register" style={{ textDecoration: 'none' }}>
            <span>
              Đăng ký
            </span>
          </Link>}
          {!currentUser && <Link to="/login" style={{ textDecoration: 'none' }}>
            <span>
              Đăng nhập
            </span>
          </Link>}
          {currentUser &&  <div  onClick={handleLogout}>Đăng xuất <LogoutOutlined/></div>}
          <Link to="/cart">
            <div className="cartIcon">
              <ShoppingCartOutlined className="cart" />
              <span className="number">{quantity}</span>
            </div>
          </Link>
          {/* <LogoutOutlined onClick={handleLogout} /> */}
          {currentUser && <Link to={"/user/profile"} className="user" style={{ textDecoration: "none", cursor:"pointer" }}>
            <img src={currentUser?.img ? `${IMAGE_LINK}/${currentUser?.img}`:`${IMAGE_DEFAULT}`} alt="" className="img-client"/>
            
          </Link>}
        </div>
      </div>
    </div>
  )
}

export default Navbar;