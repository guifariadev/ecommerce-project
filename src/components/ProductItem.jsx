import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {
  const { currency } = useContext(ShopContext);
  
  return (
   <Link to={`/product/${id}`} className="cursor-pointer text-gray-800 w-[300px]">
  <div className="w-full h-[260px] overflow-hidden rounded-md">
    <img
      src={image[0]}
      alt={name}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 will-change-transform"
    />
  </div>
  <p className="text-sm pt-3 pb-1 truncate">{name}</p>
  <p className="text-sm text-black">{currency} {price}</p>
</Link>

  )
}

export default ProductItem;