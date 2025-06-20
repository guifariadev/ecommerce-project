import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "../ProductItem";
 
const BestSellers = () => {
  const { products } = useContext(ShopContext);  
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    setBestSellers(products.filter((product) => product.bestSeller === true ))
  },[]) 

  return (
    <section className="w-full flex flex-col items-center justify-center space-y-10 my-10">
      <h1 className="text-center text-3xl md:text-5xl text-black">Best sellers</h1>
      {/* products setup */}
      <div className="w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 max-w-7xl">
        {
          bestSellers.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </section>
    
  );
};

export default BestSellers;
