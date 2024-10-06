// import React from 'react'
import "./Footer.scss"
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, GoogleOutlined, HeatMapOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="left">
            <h1 className="logo">
                TADA SHOP
            </h1>
            <p>
            “Đặt sự hài lòng của khách hàng là ưu tiên số 1 
            trong mọi suy nghĩ hành động của mình” là sứ mệnh, 
            là triết lý, chiến lược.. luôn cùng TADA tiến bước
            </p>
            <div className="iconContainer">
                <div className="icon" style={{backgroundColor:'#3B5999'}}>
                    <FacebookOutlined className="icon-w"/>
                </div>
                <div className="icon" style={{backgroundColor:'#E4405F'}}>
                <InstagramOutlined className="icon-w"/>
                </div>
                <div className="icon" style={{backgroundColor:'#55ACEE'}}>
                <TwitterOutlined className="icon-w"/>
                </div>
                <div className="icon" style={{backgroundColor:'#F7EFE5'}}>
                <GoogleOutlined className="icon-w"/>
                </div>
            </div>

        </div>
        <div className="center">
            <h3 className="title">Về TadaShop</h3>
            <ul className="list">
                <li className="listItem">Giới thiệu</li>
                <li className="listItem">Liên hệ</li>
                <li className="listItem">Tuyển dụng</li>
                <li className="listItem">Tin tức</li>
                <li className="listItem">Hệ thống cửa hàng</li>
                <li className="listItem">Hàng mới về</li>
                <li className="listItem">Hàng Outlet</li>
                <li className="listItem">Tin khuyến mãi</li>
                <li className="listItem">Đăng ký đối tác</li>
                <li className="listItem">Giỏ hàng</li>
            </ul>
        </div>
        <div className="right">
            <h3 className="title">Liên hệ</h3>
            <div className="contactItem">
            <HeatMapOutlined /> <p>Trường Đại Học Công nghiệp Hà Nội - Bắc Từ Liêm - Hà Nội</p>
            </div>
            <div className="contactItem">
            <PhoneOutlined /> <p>0816313868</p>
            </div>
            <div className="contactItem">
            <MailOutlined /> <p>tada@gmail.com.tan</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer