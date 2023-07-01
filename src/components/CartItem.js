import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price } = item;

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div>
      <h4>{name}</h4>
      <p>Precio: ${price}</p>
      <button onClick={handleRemoveFromCart}>Eliminar</button>
    </div>
  );
};

export default CartItem;
