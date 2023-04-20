import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/ButtonComponent";
import CartItem from "../cart-item/CartItem";
import { DropdownContainer } from "./cart-dropdown.style.jsx";

const CartDropDown = () => {
  const { cartItems } = useCartContext();

  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <DropdownContainer>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your card is empty </span>
        )}
      </div>
      <ButtonComponent
        onClick={checkoutHandler}
        buttonType={BUTTON_TYPE_CLASSES.google}
      >
        checkout
      </ButtonComponent>
    </DropdownContainer>
  );
};

export default CartDropDown;
