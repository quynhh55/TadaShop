import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Profiler.scss';
import {IMAGE_DEFAULT,IMAGE_LINK,TADA_SHOP} from '../../requestMethod'
import { updateUserr } from "../../redux/apiCalls";

const Profiler = () =>{

    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser);
    console.log('cu',currentUser);
    const [name, setName] = useState(currentUser.username)
    const[phone,setPhone] = useState(currentUser.phone)
    const [address, setAddress] = useState(currentUser.address);
    const [file, setFile] = useState(null);
    const handleSave = () => {
        const updatedUser = {
            ...currentUser,
            username: name,
            phone: phone,
            address: address,
            // Nếu có tệp ảnh mới thì thêm vào đối tượng cập nhật
            img: file ? URL.createObjectURL(file) : currentUser.img
        };
        updateUserr(updatedUser, dispatch);
    };     

    return(
        <div className="profile-wrapper">
            <div className="profile-heading">
                <div className="profile-title">
                    Hồ Sơ Của Tôi
                </div>
                <div className="title">
                    Quản lý thông tin hồ sơ để bảo mật tài khoản
                </div>
            </div>
            <div className="profile-content">
                <div className="profile-content-left">
                    <div className="profile-content-left-item">
                        <div className="title">
                            Email
                        </div>
                        <div className="item-value">
                            {currentUser.email}
                        </div>
                    </div>
                    <div className="profile-content-left-item">
                        <div className="title">
                            Họ và tên
                        </div>
                        <div className="item-value">
                            <input type="text" className="input-name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="profile-content-left-item">
                        <div className="title">
                            Số điện thoại
                        </div>
                        <div className="item-value">
                            <input type="text" className="input-name" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>
                    <div className="profile-content-left-item">
                    <div className="title">
                            Địa chỉ
                        </div>
                        <div className="item-value">
                            <input type="text" className="input-name" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </div>

                    
                </div>
                <div className="profile-content-right">
                <img src={currentUser.img ? `${IMAGE_LINK}/${currentUser.img}`:`${IMAGE_DEFAULT}`} alt="" className="avatar-user"/>
                    {/* <img src={file ? URL.createObjectURL(file) : `${IMAGE_LINK}/${currentUser.avatar}`} alt="" className="avatar-user" /> */}
                    <input type="file" name="" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
                    <label htmlFor="file">
                        <div className="btn-select-img">
                            Chọn ảnh
                        </div>
                    </label>
                </div>
            </div>
            <div className="profile-bottom" onClick={handleSave}>
                <div className="btn-save">
                    Lưu
                </div>
            </div>
        </div>
    )
}

export default Profiler;