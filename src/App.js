import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./shop/Header";
import Shop from "./shop/Shop";
import Cart from "./shop/Cart";

function App() {
  const [cart, setCart] = React.useState(false);
  const handleShow = () => {
    setCart((cart) => !cart);
  };
  return (
    <div className="App">
      <Header show={handleShow} />
      {cart ? <Cart /> : <Shop />}
    </div>
  );
}

export default connect(null, null)(App);
