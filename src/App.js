import "./App.css";
import Header from "./components/local components/Header";
import Error from "./components/local components/Error";
import Cart from "./components/local components/Cart";
import Home from "./components/local components/Home";
import Details from "./components/local components/Details";
import Terms from "./components/local components/Terms";
import About from "./components/local components/About";
import CategoryPage from "./components/local components/CategoryPage";
import { Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import SearchPage from "./components/local components/SearchPage";
import { Toaster } from "./components/ui/toaster";

export const CartContext = createContext();

function App() {
  const [shopResponse, setShopResponse] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchShopData = async () => {
      let data = await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );

      // console.log(data);
      setShopResponse(data);
    };

    fetchShopData();
  }, []);

  const addToCart = (item, quantity) => {
    item.quantity = parseInt(quantity);

    if (!cartItems.some((ct) => ct.id === item.id)) {
      setCartItems((cartItems) => [...cartItems, item]);
    } else {
      setCartItems((cartItems) =>
        cartItems.map((ct) =>
          ct.id === item.id ? { ...ct, quantity: parseInt(quantity) } : ct
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems((cartItems) => cartItems.filter((ct) => ct.id !== id));
  };

  return (
    <CartContext.Provider value={cartItems}>
      <div className="flex flex-col h-screen bg-background">
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home shopResponse={shopResponse} />} />
          <Route
            path="/cart"
            element={
              <Cart addToCart={addToCart} removeFromCart={removeFromCart} />
            }
          />
          <Route
            path="/men's clothing"
            element={<CategoryPage category="Men's Clothing" />}
          />
          <Route
            path="/women's clothing"
            element={<CategoryPage category="Women's Clothing" />}
          />
          <Route
            path="/jewelery"
            element={<CategoryPage category="Jewelery" />}
          />
          <Route
            path="/electronics"
            element={<CategoryPage category="Electronics" />}
          />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/product/:id"
            element={<Details addToCart={addToCart} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
