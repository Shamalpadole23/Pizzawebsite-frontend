import React, { useState, useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../component/MenuItem";
import CartPopup from "../component/CartPopup";
import { apiUrls } from "../config"; // Import the apiUrls object
import "../styles/Menu.css";

function Menu() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [latestBooking, setLatestBooking] = useState(null); 

  useEffect(() => {
    fetchLatestBooking();
  }, []);

  const fetchLatestBooking = async () => {
    try {
      const response = await fetch(apiUrls.getBookings);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        
        setLatestBooking(data[data.length - 1]);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateCartItem = (index, updatedItem) => {
    const newCartItems = [...cartItems];
    newCartItems[index] = updatedItem;
    setCartItems(newCartItems);
  };

  const removeCartItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleBooking = async (name, mobileNumber, address) => {
    try {
      const response = await fetch(apiUrls.createBooking, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          mobileNumber,
          address,
          cartItems: cartItems.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // Booking successful!
        setCartItems([]); // Clear cart items
        setIsCartOpen(false); // Close the cart popup
        
        
      } else {
        console.error(data.message); // Error message
      }
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            addToCart={() => addToCart(menuItem)}
          />
        ))}
      </div>
      <button onClick={() => setIsCartOpen(true)} className="cartbutton">Cart</button>
      {isCartOpen && (
        <CartPopup
          cartItems={cartItems}
          updateCartItem={updateCartItem}
          removeCartItem={removeCartItem}
          handleBooking={handleBooking}
          onClose={() => setIsCartOpen(false)}
        />
      )}

      
      {latestBooking && (
        <div className="latest-booking-section">
          <h2>Most Recent Booking</h2>
          <p>
            <strong>Name:</strong> {latestBooking.name}<br />
            <strong>Mobile Number:</strong> {latestBooking.mobileNumber}<br />
            <strong>Address:</strong> {latestBooking.address}
            
            {latestBooking.cartItems.map((item, itemIndex) => (
              <span key={itemIndex}>
                <br />
                <strong>Cart Item:</strong> {item.quantity}x {item.name} - ${item.price}
              </span>
            ))}
          </p>
        </div>
      )}

     
    </div>
  );
}

export default Menu;
