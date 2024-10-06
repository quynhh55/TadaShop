import React, { useState } from "react";
import './Purchase.scss';
import {routesPurchasePage} from '../../constant';
import { Link, Outlet } from "react-router-dom";
const Purchase = () => {
  const [currentRouteId, setCurrentRouteId] = useState(1);
    return (
        <div className='purchase-wrapper'>
            <div className="purchase-heading">
                {routesPurchasePage.map((route) => (
                    <Link to={route.path} key={route.id} className={route.id === currentRouteId ? "purchase-heading-item active" : "purchase-heading-item"} onClick={() => setCurrentRouteId(route.id)}>
                        {route.title}
                    </Link>
                ))}
            </div>
            <div className="purchase-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Purchase;