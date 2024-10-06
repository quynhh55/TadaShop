import React from "react";
import './Profile.scss';
import Navbar from "../../components/Navrbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Profiler from "../../components/Profiler/Profiler";
import User from "../../components/User/User";

const Profile = () => {

    return (
        <div>
           
            <div >           
                {/* <User />  */}
                <Profiler />
            </div>
           
        </div>
    )
}

export default Profile;