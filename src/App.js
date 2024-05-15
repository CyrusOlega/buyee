import "./App.css";
import Header from "./components/local components/Header";
import Error from "./components/local components/Error";
import Cart from "./components/local components/Cart";
import Home from "./components/local components/Home";
function App() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      {/* <Error /> */}
      {/* <Cart /> */}
      <Home />
    </div>
  );
}

export default App;
