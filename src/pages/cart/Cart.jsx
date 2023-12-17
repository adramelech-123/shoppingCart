import PRODUCTS from "../../products"
import { useContext } from "react"
import { ShopContext } from "../../Contexts/ShopContext"
import CartItem from "./CartItem"
import "./cart.css"
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const { cartItems, getTotalCartAmt } = useContext(ShopContext);
  const totalAmt = getTotalCartAmt()
  const navigate = useNavigate()
  
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={index} data={product} />;
          }
        })}
      </div>

      {totalAmt > 0 ? (
        <div className="checkout">
          <p>
            <b>SubTotal:</b> ${totalAmt}
          </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1 style={{color: 'orangered'}}>Your Cart is Empty!</h1>
      )}
    </div>
  );
}
export default Cart