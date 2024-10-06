import React, { useState, useEffect } from 'react';
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { userRequest } from '../../requestMethod';
import { Link } from 'react-router-dom';

function TopSelling() {
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    console.log('topSellingProducts',topSellingProducts);
    useEffect(() => {
        userRequest.get('/orders/top-selling-products')
            .then(response => {
                setTopSellingProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching top selling products:', error);
            });
    }, []);

    return (
        <div className='prod'>
            <h1>SẢN PHẨM BÁN CHẠY</h1>
            <div className="products">
                {topSellingProducts.slice(0,8).map(product => (
                    //   <li key={product?._id}>
                    //     <img src={product.img} alt={product?.title} />
                    //     <p>{product?.title}</p>
                    //     <p>Sold: {product?.totalQuantitySold}</p>
                    //   </li>
                    <div className="product">
                        <div className="circle">

                        </div>
                        {/* <img src={`/img/AO_Bong_Da/${item.img}`} alt="" /> */}
                        <img src={`${product.img}`} alt="" />

                        <div className="info">
                            <div className="icon">
                                <ShoppingCartOutlined />
                            </div>
                            <div className="icon">
                                <Link to={`/product/${product._id}`}>
                                    <SearchOutlined />
                                </Link>

                            </div>
                            <div className="icon">
                                <HeartOutlined />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default TopSelling;
