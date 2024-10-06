import React from 'react';
import { UserOutlined, GiftOutlined, LogoutOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {IMAGE_DEFAULT,IMAGE_LINK,TADA_SHOP} from '../../requestMethod'

import { Link } from "react-router-dom";
import './User.scss'
const User = ({handleLogout}) => {
    const currentUser = useSelector((state) => state.user.currentUser);
   
    return (
        <div className='profile'>
            <div className="profile-left">
            <div className="img-name">
                <img src={currentUser.img ? `${IMAGE_LINK}/${currentUser.img}`:`${IMAGE_DEFAULT}`} alt="" />
                <span>{currentUser.username}</span>
            </div>
            <Link to='/user/profile' className='tada-link'>
            <div className="logout">
                <div className="infor">
                    <UserOutlined className='sidebarIcons' />
                    Tài khoản của tôi
                </div>
            </div>
            </Link>
            
            <Link to='/user/purchase' className='tada-link'>
                <div className="logout" >
                    <div className="infor">
                        <GiftOutlined className='sidebarIcons' />
                        Đơn mua
                    </div>
                </div>
            </Link>
            <div className="logout" onClick={handleLogout}>
                <div className="infor" >
                    <LogoutOutlined className='sidebarIcons' />
                    Đăng xuất
                </div>
            </div>
        </div>
        </div>
    )
}

export default User;
