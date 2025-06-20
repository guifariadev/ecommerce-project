import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { BiTrash } from "react-icons/bi";
import CartTotal from "../components/CartTotal.jsx";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect (() => {
    const tempData = [];
    for(const items in cartItems) {
      for(const item in cartItems[items]) {
        if (cartItems[items][item] > 0 ) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])
  return (
    <section className="pt-20 px-5 sm:px-20 lg:px-40">
      <h2 className="text-3xl sm:text-4xl mb-3">Your cart</h2>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className="grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 py-4 border-t last-of-type:border-b border-gray-700 items-center">
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} alt="" className="w-16 sm:w-24 h-14 sm:h-20"/>
                <div>
                  <p className="text-xs sm:text-lg"> {productData.name} </p>
                  <div className="flex items-center gap-5 mt-2"> 
                    <p> {currency}{productData.price} </p>
                    <p className="text-xs sm:text-sm bg-zinc-300 rounded-sm px-2 py-1"> {item.size} </p>
                  </div>
                </div>
              </div>
              <input 
              className="border max-w-10 sm:max-w-20 h-fit px-1 sm:px-2 py-1 text-xs sm:text-sm"
              onChange={(e) => updateQuantity(e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value)))} 
              type="number" 
              min={1} 
              defaultValue={item.quantity}
              />
              <BiTrash onClick={() => updateQuantity(item._id, item.size, 0)} className="size-8  rounded-sm p-1 cursor-pointer"/> 
            </div>
          ) 
        })}
      </div>
      
    </section>
  )
};

export default Cart;
