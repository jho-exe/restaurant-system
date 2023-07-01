import React from 'react';

const Cart = ({ tableNumber, items, removeFromCart, placeOrder }) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId, tableNumber);
  };

  const handlePlaceOrder = () => {
    placeOrder(tableNumber);
  };

  return (
    <div>
      <h2>Carrito de Pedidos - Mesa {tableNumber}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${totalPrice}</h3>
      <button className="btn btn-primary" onClick={handlePlaceOrder}>
        Realizar Pedido
      </button>
    </div>
  );
};

export default Cart;