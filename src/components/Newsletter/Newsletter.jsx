// import React from 'react'
import { SendOutlined } from '@ant-design/icons';
import "./Newsletter.scss"
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>BẢN TIN</h1>
        <div className='desc'>Nhận thông tin cập nhật kịp thời từ các sản phẩm yêu thích của bạn.</div>
        <div className="newsletter-input">
            <input type="text" placeholder='Your email'/>
            <button><SendOutlined className='icon'/></button>
        </div>
    </div>
  )
}

export default Newsletter