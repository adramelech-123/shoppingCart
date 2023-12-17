import { createContext, useState } from "react";
//
import PRODUCTS from "../products";

export const ShopContext = createContext(null);

// Cart Object containing the ids and information of the products
const getDefaultCart = () => {
  // Set cart to an empty object
  let cart = {};
  // Set IDs of products based on the PRODUCTS list. These Ids will be the keys in our cart object
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    // Set value of each key (product Id) to 0
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmt, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmt }));
  };

  const getTotalCartAmt = () => {
    let totalAmt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmt += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmt;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmt,
  };

  // eslint-disable-next-line react/prop-types
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
