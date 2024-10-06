// import React from 'react'

import CategoryItem from "../CategoryItem/CategoryItem";
import "./Categories.scss"
const Categories = () => {

    const data =[
        {
            id:'1',
            img:"https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nu-apn7122-ben-qjn6052-xnh-7-yodyvn.jpg",
            title:"Nữ",
            cat:"women"
        },
        {
            id:'2',
            img:"https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nam-yody-apm7053-den-qkm6013-vag-1.jpg",
            title:"NAM",
            cat:"man"
        },
        {
            id:'3',
            img:"https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk39xcpl2i9u3fhttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt1vicpmmc2h24",
            title:"THỂ THAO",
            cat:"football"
        },
        // {
        //     id:'4',
        //     img:"https://images.pexels.com/photos/8685526/pexels-photo-8685526.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     title:"NEW DRESSES"
        // },
        // {
        //     id:'5',
        //     img:"https://images.pexels.com/photos/4691100/pexels-photo-4691100.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     title:"THE PERFECT JEANS"
        // },
    ]

  return (
    <div className='categories'>
        {
            data.map((item) =>(
               
                    <CategoryItem item={item} key={item.id} />
                
            ))
        }
    </div>
  )
}

export default Categories