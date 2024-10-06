import React from 'react'
import "./CategoryItem.scss"
import { Link } from 'react-router-dom'
const CategoryItem = ({item}) => {
  return (
    <div className='categoryItem'>
        <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" />
        <div className="info">
            <h1>
                {item.title}
            </h1>
            <button>XEM NGAY</button>
        </div>
        </Link>
    </div>
  )
}

export default CategoryItem
