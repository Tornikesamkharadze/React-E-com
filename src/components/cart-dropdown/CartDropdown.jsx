import CartItem from "../cart-item/CartItem";
import { useCartContext } from "../../contexts/CartContext";
import ButtonComponent from "../button/ButtonComponent";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  const { cartItems } = useCartContext();

  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={checkoutHandler} buttonType="google">
        checkout
      </ButtonComponent>
    </div>
  );
};

export default CartDropDown;
