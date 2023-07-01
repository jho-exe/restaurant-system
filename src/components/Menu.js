import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ addToCart }) => {
  const menuItems = [
    { id: 1, name: 'Hamburguesa', price: 10 },
    { id: 2, name: 'Pizza', price: 12 },
    { id: 3, name: 'Ensalada', price: 8 },
    { id: 4, name: 'Bebida', price: 7 },
    { id: 5, name: 'Sandwich', price: 11 },
    { id: 6, name: 'Completo', price: 5 },
  ];

  return (
    <div>
      <h2>Menú</h2>
      <div className="row">
        {menuItems.map((item) => (
          <div key={item.id} className="col-md-4">
            <MenuItem item={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
