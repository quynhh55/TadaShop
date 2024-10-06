//import React from "react"
import { useDispatch, useSelector } from "react-redux";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navrbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import { useEffect } from "react";
import { getCart } from "../redux/apiCalls";
import { Navigate } from "react-router-dom";

const Layout = ({ handleLogout, children }) => {
    const users = useSelector((state) =>state.user.currentUser);
    const id = users?._id;
    const dispatch = useDispatch();
    useEffect(() =>{
        id && getCart(dispatch,id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ id])
    return (
        <div>
            <Announcement />
            <Navbar handleLogout={handleLogout} />
            {children}
            <Newsletter />
            <Footer />

        </div>
    )
}


const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.user.currentUser);
    if (!user) {
        return <Navigate to="/" />
    }
    return children
}
const Logged = ({ children }) => {
    const user = useSelector((state) => state.user.currentUser);
    if (user) {
        return <Navigate to="/" />
    }
    return children
}

export { Layout, Logged, ProtectedRoute };