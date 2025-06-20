import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { CiStar } from "react-icons/ci";
import ProductItem from "../../src/components/ProductItem";
 
const Product = () => {

  window.scrollTo(0,0);
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);

  // filter the best sellers from the products to use in the other products section
  useEffect(() => {
    const filtered = (products.filter((product) => product.bestSeller === true ));
    setOtherProducts(filtered.slice(0,4));
  },[]) 

  // Get the product data based on the productId 
  useEffect(() => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);      
    }
  }, [productId, products]);

  if (!productData) return <section className="opacity-0"></section>;

  return (
    <section className="mb-10 pt-20 transition-opacity ease-in duration-500 opacity-100 max-w-[1400px] mx-auto p-5">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-y-4">
            {/* small images */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:w-[100px]">
              {productData.image.map((item, index) => (
                <img
                  src={item}
                  alt={`Thumbnail ${index}`}
                  key={index}
                  onClick={() => setImage(item)}
                  className={`sm:size-[80px] size-[50px] object-cover rounded cursor-pointer border ${
                    item === image ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
            {/* Main img */}
            <div className="w-[90%] lg:w-[500px] xl:w-[600px]">
              <img
                src={image}
                alt="Main Product"
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
          </div>
          {/* product info */}
          <div className="flex flex-col gap-4 w-full max-w-xl">
            <h1 className="text-2xl">{productData.name}</h1>
            <div className="flex items-center text-orange-400">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar className="text-gray-600" />
              <p className="text-sm text-black pl-2">(100 reviews)</p>
            </div>
            <p className="text-3xl font-bold">
              {currency}
              {productData.price}
            </p>
            <p className="text-sm text-gray-700 max-w-[500px]">
              {productData.description}
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Select size</h4>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-3 py-1 rounded transition cursor-pointer ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => addToCart(productData._id, selectedSize)} className="bg-black text-white px-8 py-3 text-sm w-fit cursor-pointer">
              Add to cart
            </button>
            <hr className="mt-4 lg:w-4/5"/>
            <p className="text-gray-500 text-sm"> 100% original product | Return and exchange policy within 7 days</p>
          </div>
        </div>
        {/* description and review */}
        <div className="mt-20">
          <div className="flex">
            <h4 className="border border-gray-400 px-5 py-3 text-sm cursor-pointer">Description</h4>
            <h4 className="border border-gray-400 px-5 py-3 text-sm cursor-pointer">Reviews (100)</h4>
          </div>
          <div className="flex flex-col gap-4 border border-gray-400 p-4 text-sm ">
            <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit fugiat rem quo nihil quas repudiandae rerum ipsum mollitia beatae illo. Eum error voluptatibus itaque delectus quae aliquid corrupti repellat maiores. </p>
            <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit fugiat rem quo nihil quas repudiandae rerum ipsum mollitia beatae illo. Eum error voluptatibus itaque delectus quae aliquid corrupti repellat maiores. </p>
          </div>
        </div>
      {/* other products section  */}
      <div className="mt-20">
         <h2 className="text-center text-3xl md:text-5xl text-black">You may also like</h2>
         <div className="w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6  mx-auto mt-10">
           {otherProducts.map((item, index)=> (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
           ))}
         </div>
      </div>
    </section>
  );
};

export default Product;
