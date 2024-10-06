// import React from 'react'
import "./Product.scss";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import {userRequest} from "../../requestMethod"
import { addProduct } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { message } from 'antd';
import { addProductToCart } from "../../redux/apiCalls";
import { numberWithCommas } from "../../utils/formatMoney"
const Product = () => {

  const location = useLocation();
  const currentUser = useSelector((state) =>state.user.currentUser);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    } 
  }
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get("/products/find/" + id);
        setProduct(res.data);
        setColor(res.data.color[0])
        setSize(res.data.size[0])
      } catch {

      }
    }
    getProduct()
  }, [id])
  // console.log("-----product: ", product);
  // console.log("-----product color: ", product.color);
  // console.log("color: ",color);
  // console.log("size: ", size);
  // console.log("quantity",quantity);
  const handleAddToCart = () => {
    debugger //1
    if (!size || !color) {
      message.error('Vui lòng chọn loại sản phẩm!');
      return;
    } 
    if(quantity >= 10){
      message.error('Sản phẩm trong kho không đủ');
      return;
    }
    if (!product.inStock) {
      message.error('Sản phẩm đã hết hàng!');
      return;
    }
    if(size && color && quantity > 0){
      console.log('{ ...product, quantity, color, size }', { ...product, quantity, color, size });
      // dispatch(addProduct({ ...product, quantity, color, size }));
      addProductToCart(dispatch, currentUser._id, { ...product, quantity, color, size })
      message.success('Đã thêm sản phẩm vào giỏ hàng!');
    }
    
  }
  const handleColor = (c) => {
    //console.log('c',c);
    setColor(c);
    message.success(`Đã chọn màu ${c}`)
  }
  const handleSize = (e) => {
    setSize(e.target.value);
    message.success(`Đã chọn size ${e.target.value}`)
  }
  return (
    <div>
      <div className="product-container">
        <img src={`${product.img}`} alt=""/>
        <div className="info">
          <h3 className="title">{product.title}</h3>
          <div className="desc">{product.desc}</div>
          <div className="price">{numberWithCommas(product.price)}</div>
          <div className="filter-container">
            <div className="filter">
              <div className="filter-title">Màu sắc</div>
              {product.color?.map((c) => (
                <div className="FilterColor" color={c} key={c} onClick={() => handleColor(c)}></div>
              ))}
              {/* {product.color && Array.isArray(product.color) && product.color.map((c, index) => (
                <div className="FilterColor" color={c} key={c}>{c}</div>
              ))} */}

            </div>

            <div className="filter">
              <div className="filter-title">Kích cỡ</div>
              <select name="" id="" className="filter-size" onChange={(e) => handleSize(e)}>
                {product.size?.map((s) => (
                  <option value={s} key={s}>{s}</option>
                ))}
              </select>
            </div>

          </div>
          <div className="addContainer">
            <div className="amount">
              <MinusOutlined className="cout" onClick={() => handleQuantity("dec")} />
              <div className="number">{quantity}</div>
              <PlusOutlined className="cout" onClick={() => handleQuantity("inc")} />
            </div>
            <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Product