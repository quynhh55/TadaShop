import React, { useState } from 'react'
import './Order.scss'
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from '../../utils/formatMoney';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, resetCart } from '../../redux/apiCalls';
import {message} from 'antd';
const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const currentUser = useSelector((state) => state.user.currentUser);
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const handleCreateOrder = () => {
        // {
        //     "userId": "65c1f8c4efb55f7d09ea76bc",
        //     "products": [
        //         {
        //             "productId": "65c250d11ded8fe13c7b5d94",
        //             "quantityOrder": 2,
        //             "colorOrder": "blue",
        //             "sizeOrder": "M"
        //         }

        //     ],
        //     "amount": 300,
        //     "address":"Hải Dương",
        //     "name":"Thu Thuỷ",
        //     "note": "Giao hàng ngu",
        //     "phone": "098374626"
        // }
        const orderProducts = cart.product.map(product => {
            return {
                productId: product.productId._id,
                quantityOrder: product.quantity,
                colorOrder: product.colorCart,
                sizeOrder: product.sizeCart
            }
        })
        const data = {
            ...inputs,
            userId: currentUser._id,
            amount: cart.total,
            products: orderProducts
        }
        if (!data.address || !data.name || !data.phone) {
            message.error("Vui lòng điền đầy đủ thông tin trước khi đặt hàng!");
            return;
        }
        createOrder(data)
        resetCart(dispatch, currentUser._id)
        message.success("Bạn đã đặt hàng thành công!");
        navigate('/user/purchase');
    }
    return (
        <>
            <div className='order-wrapper'>
                <div className="order-heading">
                    Đặt hàng
                </div>
                <div className="order-user">
                    <div className="order-user-heading">
                        Thông tin khách hàng
                    </div>
                    <div className="user-infor">
                        <div className="user-infor-item">
                            <input
                                type="text"
                                name='name'
                                placeholder='Họ tên'
                                //value={customer.fullname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="user-infor-item">
                            <input
                                type="text"
                                name='phone'
                                placeholder='Số điện thoại'
                                //value={customer.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                </div>
                <div className="order-address">
                    <div className="order-address-heading">
                        Địa chỉ nhận hàng
                    </div>

                    <div className="address-detail">
                        <input
                            type="text"
                            name="address"
                            className="input-address-detail"
                            placeholder='Địa chỉ cụ thể'
                            //value={addressDetail}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="method-checkout">
                    <div className="checkout-item">
                        <div className="item">
                            <div className="title-item">Cách thức thanh toán :</div>
                            <div className="value-item">Thanh toán khi nhận hàng</div>
                        </div>
                    </div>
                    <div className="wrapper-node">
                        <input
                            type="text"
                            className="input-text-node"
                            placeholder='Ghi chú...'
                            name='note'
                            //value={customer.note}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="order-product">
                    {cart.product.map(product => (
                        <div className="order-content">
                            <div className="order-product-left">
                                <img src={`${product.productId.img}`} alt="" />
                                <div className="order-product-infor">
                                    <div className="infor-title">
                                        {product.title}
                                    </div>
                                    <div className="infor-type">
                                        Phân loại: {product.colorCart}, {product.sizeCart}
                                    </div>
                                    <div className="infor-quantity">
                                        x {product.quantity}
                                    </div>

                                </div>
                            </div>
                            <div className="order-product-right">
                                <div className="infor-price">
                                {numberWithCommas(product.productId.price * product.quantity)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="checkout-product">
                    <div className="checkout-product-right">
                        <div className="sum-price-checkout">
                            <div className="title-checkout">
                                Thành tiền :
                            </div>
                            <div className="price-order">
                            {numberWithCommas(cart.total)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-bottom">
                    <div className="btn-submit" onClick={handleCreateOrder}>
                        Đặt hàng
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;