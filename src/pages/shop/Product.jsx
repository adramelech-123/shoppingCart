import { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopContext";

const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const {id, productName, price, productImage} = props.data
  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemAmt = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        {/* If cartItemAmt id greater than zero, then display the cartItemAmt in brackets */}
        Add To Cart {cartItemAmt > 0 && <>({cartItemAmt})</>}
      </button>
    </div>
  );
};
export default Product