// import React from 'react'
import { useState } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import "./Slider.scss";
//import { sliderItems } from '../../data';
const Slider = () => {

    const sliderItems = [
        {
            id: 1,
            img: "https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nu-yoguu-co-cao-yodygut7028-ghi-qjn6052-xnh-2.jpg",
            title: "HÀNG HÃNG",
            desc: "GÍA ĐỘC QUYỀN ONLINE  ",
            col: "GIẢM ĐẾN 50%"
        },
        {
            id: 2,
            img: "https://m.yodycdn.com/fit-in/filters:format(webp)/products/gut7050-xah-1.jpg",
            title: "SĂN DALE SIÊU TỐC",
            desc: "PHÍ SHIPS 0$ ",
            col: "ÁP DỤNG TỪ ĐƠN TRÊN 90$ "
        },
        {
            id: 3,
            img: "https://bizweb.dktcdn.net/100/438/408/products/ao-thun-tre-em-tsk7244-tpc-1.jpg?v=1715652574323",
            title: "NHẬN VOUCHER ",
            desc: "TO",
            col: "SHOPPING KHỎI LO"
        }
    ]

    const [currentSlider, setCurrentSlider] = useState(0);


    const prevSlider = () => {
        setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlider = () => {
        setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
    }
    return (
        <div className="slider">
            <div className="arrow-left" onClick={() => { prevSlider() }}>
                <CaretLeftOutlined />
            </div>
            <div className="slider-wapper 1" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                {
                    sliderItems.map((item) =>
                    (
                        <div className="slider-container" key={item.id}>
                            <div className="slider-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="slider-info">
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <p>{item.col}</p>
                                <button>XEM NGAY</button>
                            </div>
                        </div>
                    ))
                }

                {/* <div className="slider-container">
                <div className="slider-img">
                    <img src={sliderItems.img[1]} alt="" />
                </div>
                <div className="slider-info">
                    <h1>{sliderItems.title[1]}</h1>
                    <p>{sliderItems.desc[1]}</p>
                    <button>SHOW NOW</button>
                </div>
            </div>

            <div className="slider-container">
                <div className="slider-img">
                    <img src={sliderItems.img[2]} alt="" />
                </div>
                <div className="slider-info">
                    <h1>{sliderItems.title[2]}</h1>
                    <p>{sliderItems.desc[2]}</p>
                    <button>SHOW NOW</button>
                </div>
            </div> */}
            </div>
            {/* <div className="slider-wapper 2">
            
        </div>
        <div className="slider-wapper 3">
            
        </div> */}
            <div className="arrow-right" onClick={() => { nextSlider() }}>
                <CaretRightOutlined />
            </div>
        </div>
    )
}

export default Slider