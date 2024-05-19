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
import { useEffect, useState } from "react";
import SearchPage from "./components/local components/SearchPage";

function App() {
  const [shopResponse, setShopResponse] = useState("");

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

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<Home shopResponse={shopResponse} />} />
        <Route path="/cart" element={<Cart />} />
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
        <Route path="/*" element={<Error />} />
        {/* <Cart /> */}
        {/* <Home /> */}
        {/* <CategoryPage /> */}
      </Routes>
    </div>
  );
}

export default App;
