import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Order from './components/Order';

const App = () => {
  const [carts, setCarts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showSidenav, setShowSidenav] = useState(false);

  // Función para agregar un producto a un carrito
  const addToCart = (item, tableNumber) => {
    const updatedCarts = [...carts];
    const cartIndex = updatedCarts.findIndex((cart) => cart.tableNumber === tableNumber);

    if (cartIndex !== -1) {
      updatedCarts[cartIndex].items.push(item);
    } else {
      updatedCarts.push({ tableNumber, items: [item] });
    }

    setCarts(updatedCarts);
  };

  // Función para eliminar un producto de un carrito
  const removeFromCart = (itemId, tableNumber) => {
    const updatedCarts = carts.map((cart) => {
      if (cart.tableNumber === tableNumber) {
        const updatedItems = cart.items.filter((item) => item.id !== itemId);
        return { ...cart, items: updatedItems };
      }
      return cart;
    });

    setCarts(updatedCarts);
  };

  // Función para realizar un pedido
  const placeOrder = (tableNumber) => {
    const updatedOrders = [...orders];
    const cartIndex = carts.findIndex((cart) => cart.tableNumber === tableNumber);

    if (cartIndex !== -1) {
      updatedOrders.push(carts[cartIndex].items);
      setCarts(carts.filter((cart) => cart.tableNumber !== tableNumber));
      setOrders(updatedOrders);
    }
  };

  const toggleSidenav = () => {
    setShowSidenav(!showSidenav);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Mi Restaurant</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleSidenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showSidenav ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Opción 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Opción 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Opción 3</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-8">
          <Menu addToCart={addToCart} />
        </div>
        <div className="col-md-4">
          <div className={`d-flex flex-column h-100 ${showSidenav ? 'show' : ''}`}>
            <button className="btn btn-secondary d-md-none mb-3" onClick={toggleSidenav}>
              Ocultar carritos
            </button>
            {carts.map((cart) => (
              <div className="card mb-4" key={cart.tableNumber}>
                <div className="card-body">
                  <Cart
                    tableNumber={cart.tableNumber}
                    items={cart.items}
                    removeFromCart={removeFromCart}
                    placeOrder={placeOrder}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="order-list-container">
            <Order orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
