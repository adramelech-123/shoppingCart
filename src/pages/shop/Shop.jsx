import PRODUCTS from "../../products.js"
import Product from "./Product.jsx"
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>TradePoint Store</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product, index) => {
                // return <Product key={index} productName={product.productName} productImage={product.productImage} price={product.price}/>
                return <Product key={index} data={product}/>
            })} 
        </div>
    </div>
  )
}
export default Shop