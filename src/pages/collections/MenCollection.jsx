import React, { useEffect, useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import FilterOptions from '../../components/FilterOptions';
import ProductItem from '../../components/ProductItem';

const MenCollection = () => {
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // show all men products by default
    const menProducts = products.filter(product => product.category === 'Men');
    setFilteredProducts(menProducts);
  }, [products]);

  return (
    <>
      <h1 className="text-8xl text-center my-10 uppercase font-bold">Men's collection</h1>
      <FilterOptions baseCategory="Men" onFilter={setFilteredProducts} />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 max-w-7xl mx-auto mt-18 mb-10 p-5 sm:p-0'>
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

export default MenCollection;
