// import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./Login.scss";
import {message} from "antd";
import { Link,useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector((state => state.user))
  console.log('error', error);
  const handleSubmit=(e)=>{
    debugger//1
    e.preventDefault();
    if(!email || !password){
      message.error('Vui lòng nhập đủ thông tin !');
      return
  }
    login(dispatch,{email,password});
    // message.success('Đăng nhập thành công!')
  }
 
  return (
    
    <div className='login'>
      <div className="wrapper">
        <h1 className="title">SING IN</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <button  type="submit" disabled={isLoading}>LOGIN</button>
          <Link to='/forgot-password' style={{color:'#ff4141', textDecoration:'none', textAlign:'center'}}>
            <p>Quên mật khẩu?</p>
          </Link>
          {error && <div className="err">Đăng nhập thất bại!</div>}
        </form>
        
        <span className="agreement">
          Bạn chưa có tài khoản?

          <Link to='/register'>
            Đăng Ký
          </Link>
        </span>
        
        
      </div>
    </div>
  )
}

export default Login