import React from 'react';

const MenuItem = ({ item, addToCart }) => {
  const { id, name, price, imageUrl } = item;

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="card mb-3">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default MenuItem;
