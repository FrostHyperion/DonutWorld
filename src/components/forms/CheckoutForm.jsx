import React from "react";
import InputField from "../InputField";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  return (
    <form className="checkout-address-form">
      <InputField type="text" name="Email" />
      <InputField type="text" name="Card" />
      <InputField type="text" name="Expire" />
      <InputField type="text" name="CVC" />
      <InputField type="text" name="Name of card" />
      <InputField type="text" name="Postal Code" />
    </form>
  );
};

export default CheckoutForm;
