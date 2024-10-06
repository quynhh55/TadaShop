import React, { useState } from "react";
import './PurchaseProduct.scss'
import {format} from "timeago.js";
import { numberWithCommas } from "../../utils/formatMoney";
 

const PurchaseProduct = ({product, orderInfor}) => {
  //debugger;
  console.log('product, orderInfor',product, orderInfor);
  //console.log('order', order);
  return (
    <>
        
      <div className='purchaseProduct-wrapper'>
      {/* {products.map(pro => ( */}
        <div  className="purchaseProduct-content">
          <div className="purchaseProduct-content-left">
            <img src={product?.productId?.img} alt="" className="img-product" />
            <div className="infor-product">
              <div className="name-product">{product?.productId?.title}</div>
              <div className="filter-product">
                Phân loại: {product?.colorOrder}, {product?.sizeOrder}
              </div>
              <div className="quantity-product">
                x {product?.quantityOrder}
              </div>
            </div>
          </div>
          <div className="purchaseProduct-content-right">
            <div className="price-product">
              
              {numberWithCommas(product?.quantityOrder * product?.productId?.price)}
            </div>
          </div>
        </div>
      {/* ))} */}
      <div className="checkout-product">
        <div className="checkout-product-left">
          <div className="name-customer">
            {orderInfor?.name}
          </div>
          <div className="phone-number">
            {orderInfor?.phone}
          </div>
          <div className="delivery-address">
            {orderInfor?.address}
          </div>
          <div className="date-order">
            <div className="title">Ngày đặt :</div>
            <div className="date-value">{format(orderInfor?.createdAt)}</div>
          </div>
        </div>
        
      </div>
      {/* <div className="purchaseProduct-bottom">
        <div className="btn-delete" >
          Huỷ đơn
        </div>
      </div> */}
    </div>
    </>
  )
}

export default PurchaseProduct;