import { useCartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import "./checkout.styles.scss";
const Checkout = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((product) => {
        return <CheckoutItem key={product.id} cartItem={product} />;
      })}
      <span className="total">Total:0</span>
    </div>
  );
};

export default Checkout;
