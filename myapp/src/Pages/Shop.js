import React, { useState, useEffect } from "react";
import Amazon from "../Components/Amazon";
import Navbar from "../Components/Navshop";
import Cart from "../Components/Cart";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Shop() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <React.Fragment>
      <Header />
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      <Footer />
    </React.Fragment>
  );
};

export default Shop;
