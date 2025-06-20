import { useEffect, useState } from "react";
import { createContext } from "react";
import { products } from "../assets/DataProducts";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Function to add items to the cart
  const addToCart = async (itemId,size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error('Select product size')
      return;
    }
    
    // Check if the item already exists in the cart
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else {
        cartData[itemId][size] = 1;
      }
    }
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
      setCartItems(cartData);
  } 
  // function to count the total number of items in the cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems ){
      for(const item in cartItems [items]){
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  }

  // function to update the quantity of items in the cart
  const updateQuantity = async(itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  const getCartAmount = async() => {
    let totalAmount = 0;
    for (const items in cartItems ){
      let itemInfo = products.find((product) => product._id === items);
      for(const item in cartItems [items]){
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  }
  
  const value = {
    products, currency, search, setSearch, showSearch, 
    setShowSearch, cartItems, addToCart, getCartCount, updateQuantity,
    getCartAmount
  }

  return ( 
    <ShopContext.Provider value ={value}>
     {props.children }
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;