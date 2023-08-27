import React, { useState } from "react";
import '../styles/CartPopup.css'

function CartPopup({ cartItems, updateCartItem, removeCartItem, onClose, handleBooking }) {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleBookingClick = () => {
    if (name.trim() === "" || mobileNumber.trim() === "" || address.trim() === "") {
      alert("Please fill in all booking details.");
      return;
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      alert("Mobile number should be exactly 10 digits.");
      return;
    }

    handleBooking(name, mobileNumber, address);
    alert("Booking successful!");
  };

  return (
    <div className="cart-popup">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} - ${cartItem.price} (Qty: {cartItem.quantity})
              <button onClick={() => updateCartItem(index, { ...cartItem, quantity: cartItem.quantity + 1 })}>+</button>
              <button onClick={() => {
                if (cartItem.quantity > 1) {
                  updateCartItem(index, { ...cartItem, quantity: cartItem.quantity - 1 });
                } else {
                  removeCartItem(index);
                }
              }}>-</button>
              <button onClick={() => removeCartItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div className="booking-section">
        <h3>Booking Details</h3>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="one"/>
        <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="two"/>
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="three"/>
        <button onClick={handleBookingClick} className="four">Create Booking</button>
      </div>

      <button onClick={onClose} className="five">Close</button>
    </div>
  );
}

export default CartPopup;
