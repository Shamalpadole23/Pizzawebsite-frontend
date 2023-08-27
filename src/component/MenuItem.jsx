import React, { useState } from "react";

function MenuItem({ image, name, price, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart();
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 500); // Revert to original text after 0.5 seconds
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default MenuItem;
