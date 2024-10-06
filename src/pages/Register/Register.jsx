// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Register.scss";
import {message} from "antd";
import { useState } from "react";
import axios from "axios";
import {BASE_URL1} from "../../requestMethod";
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../redux/apiCalls";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);

  const [values, setValues] = useState({
    email: "",
    username: "",
    password: ""
})
const handleChange = (e) => {
  setValues({
      ...values,
      [e.target.name]: e.target.value
  })
}
console.log('value',values);


const handleRegister = async (e) => {
  e.preventDefault();
  if (!values.email || !values.username || !values.password) {
    message.error('Vui lòng nhập đủ thông tin!');
    return;
  }
  dispatch(register(values));
  message.success('Đăng ký thành công !');
  navigate('/login')
};

if (error) {
  message.error(error);
}

  return (
    <div className='register'>
      <div className="wrapper">
        <h1 className="title-h1">Đăng ký tài khoản</h1>
        <form action="">
          {/* <input type="text" placeholder="name" />
          <input type="text" placeholder="Last name" /> */}
          <input type="text" placeholder="Username" name="username" id="username" onChange={handleChange}/>
          <input type="text" placeholder="email" name="email" id="email"onChange={handleChange}/>
          <input type="text" placeholder="passwork" name="password" id="password" onChange={handleChange}/>
          {/* <input type="text" placeholder="confirm passwork" /> */}
        </form>
        <button onClick={handleRegister}>Đăng ký</button>
        <span className="agreement">
          Bạn đã có tài khoản?

          <Link to='/login'>
            Đăng nhập
          </Link>
        </span>
        
      </div>
    </div>
  )
}

export default Register