
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;

  const {addToCart,cartItems} = useContext(ShopContext)
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <div className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</div>
    </div>
  )
}