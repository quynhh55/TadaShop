import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.scss'; // Import CSS file
import { Link, useNavigate } from 'react-router-dom';
import { userRequest } from '../../requestMethod';
import { message } from 'antd';

const ForgotPassword = () => {
  const [email, setEmail] = useState()
  const navigate = useNavigate()

    // axios.defaults.withCredentials = true;
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     userRequest.post('/auth/forgot-password', {email})
    //     .then(res => {
    //       debugger;
    //       console.log('res',res);
    //         if(res.data.Status === "Success") {
    //             navigate('/login')
               
    //         }
    //     }).catch(err => console.log(err))
    // }
    const handleSubmit = (e) => {
      e.preventDefault();
      userRequest.post('/auth/forgot-password', { email })
      message.success('Hãy kiểm tra Email của bạn!')
      .then(res => {
          debugger;
          console.log('res', res);
          if (res.data.Status === "Success") {
              navigate('/login');
          }
      }).catch(err => console.log(err));
  };

  return (
    <div className="login">
        <div className="wrapper">
            <h1 className="title">Tìm lại tài khoản của bạn</h1>
            <h3>hãy nhập email hoặc số điện thoại .</h3>
            <form className="fields" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email của bạn" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                {/* <Link to='/resetPassword'> */}
                    <button type='submit'>Tìm kiếm</button>
                {/* </Link> */}
            </form>
            
        </div>
    </div>
  );
};

export default ForgotPassword;
