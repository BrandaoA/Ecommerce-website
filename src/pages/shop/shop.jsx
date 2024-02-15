import { PRODUCTS } from "../../products";
import { Product } from "./product";
import './shop.css'

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>Brandao's Shop</h3>
        <div className="products">
          {PRODUCTS.map((product) =>
            <Product data={product}/>
          )}
        </div>
      </div>
    </div>
  )
}