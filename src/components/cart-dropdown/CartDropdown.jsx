import ButtonComponent from "../button/ButtonComponent";
import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" />
      <ButtonComponent>Go to check out</ButtonComponent>
    </div>
  );
};

export default CartDropDown;
