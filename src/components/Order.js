import React from 'react';

const Order = ({ orders }) => {
  return (
    <div>
      <h2 className="mb-4">Lista de Pedidos</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos realizados.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Pedido {index + 1}</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4 className="mt-3">Total: ${order.reduce((total, item) => total + item.price, 0)}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
