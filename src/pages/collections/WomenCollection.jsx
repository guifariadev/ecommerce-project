import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import FilterOptions from "../../components/FilterOptions";
import ProductItem from "../../components/ProductItem";

const WomenCollection = () => {
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // show all women products by default
    const womenProducts = products.filter(
      (product) => product.category === "Women"
    );
    setFilteredProducts(womenProducts);
  }, [products]);

  return (
    <>
      <h1 className="text-8xl text-center my-10 uppercase font-bold">Women's collection</h1>
      <FilterOptions baseCategory="Women" onFilter={setFilteredProducts} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 max-w-7xl mx-auto mt-18 mb-10 p-5 sm:p-0">
        {filteredProducts.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default WomenCollection;
