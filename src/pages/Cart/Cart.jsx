// import React from 'react'
import "./Cart.scss"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined } from '@ant-design/icons';
import { deleteProductInCart } from "../../redux/apiCalls";
import { useState } from "react";
import {message, Modal } from 'antd';
import { numberWithCommas } from '../../utils/formatMoney';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const currentUser = useSelector((state) =>state.user.currentUser);
    const [deletedProductInCart, setDeletedProductInCart] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    console.log('cart', cart);

    // const handleDelete = (product) => {
    //     deleteProductInCart(dispatch, currentUser._id,product)
    // }
    const showModal = () => {
        setIsModalVisible(true);
      };


      const handleDelete = (product) => {
        debugger; //1
        // Lưu sản phẩm cần xóa vào state hoặc props để sử dụng trong hàm xác nhận xóa
        setDeletedProductInCart(product);
        showModal();
      };
      debugger;
      const handleDeleteConfirmed = () => {
        if (deletedProductInCart) {
          deleteProductInCart(dispatch, currentUser._id, deletedProductInCart);
          setDeletedProductInCart(null);
          setIsModalVisible(false);
          message.success('Xoá sản phẩm trong giỏ hàng thành công.');
        }
      };
      const handleDeleteCancelled = () => {
        setIsModalVisible(false);
        setDeletedProductInCart(null);
      };
    return (
        <div className='cart'>
            <div className="wrapper">
                <h1>Giỏ hàng của bạn</h1>
                {
                    cart.count > 0 ? 
                    <>
                        <div className="top">
                    <Link to='/'>
                        <button className="top-but-shop">Tiếp tục mua sắm</button>
                    </Link>
                    <div className="top-ps">
                        <div className="top-p">
                            Giỏ hàng của bạn({cart.count})
                        </div>
                        
                    </div>

                    <button className="top-but-check">MUA NGAY</button>

                </div>
                <div className="bottom">
                    <div className="info">
                        {cart.product.map(product => (
                            <div key={product._id} className="info-product">
                                <div className="product-cart">
                                    <img className="product-img-cart" src={`${product.productId.img}`} alt="" />
                                    <div className="details">
                                        <div className="details-name"><b>Tên sản phẩm: </b> {product.productId.title}</div>
                                        <div className="details-id"><b>ID: </b>{product.productId._id}</div>
                                        <div className="FilterColor" color={product.colorCart}></div>
                                        <div className="details-size"><b>Kích cỡ:  </b>{product.sizeCart}</div>
                                    </div>
                                </div>
                                <div className="price">
                                    <DeleteOutlined className='userListIcon' onClick={() => handleDelete(product)} />
                                    <div className="count">
                                        
                                        <p className="number">{product.quantity}</p>
                                        
                                    </div>
                                    <div className="bottom-price">
                                    {numberWithCommas(product.productId.price * product.quantity)}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr className="hr" />

                    </div>
                    <div className="summary">
                        <h1 className="summary-title">Chi tiết đơn hàng</h1>
                        <div className="summary-info">
                            <div className="info-name">Tổng giá trị sản phẩm</div>
                            <div className="info-price">{numberWithCommas(cart.total)}</div>
                        </div>
                        <div className="summary-info">
                            <div className="info-name">Vận chuyển</div>
                            <div className="info-price">Miễn phí</div>
                        </div>
                        <div className="summary-info-total">
                            <div className="info-name">Tổng thanh toán</div>
                            <div className="info-price">{numberWithCommas(cart.total)}</div>
                        </div>
                        <Link to='/order'>
                            <button className="button-cart">Đặt hàng</button>
                        </Link>
                    </div>
                </div>
                    </>: <h2>Chưa có sản phẩm nào trong giỏ hàng</h2>
                }
                
            </div>
            <Modal
        title='Xoá sản phẩm ở giỏ hàng'
        visible={isModalVisible}
        onOk={handleDeleteConfirmed}
        onCancel={handleDeleteCancelled}
      >
        <p>Bạn có chắc chắn muốn xoá sản phầm này?</p>
      </Modal>

        </div>
    )
}

export default Cart