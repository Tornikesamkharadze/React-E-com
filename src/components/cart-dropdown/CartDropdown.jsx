import CartItem from "../cart-item/CartItem";
import { useCartContext } from "../../contexts/CartContext";
import ButtonComponent from "../button/ButtonComponent";
import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  const { cartItems } = useCartContext();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent  buttonType="google">CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CartDropDown;
