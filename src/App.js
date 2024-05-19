import "./App.css";
import Header from "./components/local components/Header";
import Error from "./components/local components/Error";
import Cart from "./components/local components/Cart";
import Home from "./components/local components/Home";
import Details from "./components/local components/Details";
import Terms from "./components/local components/Terms";
import About from "./components/local components/About";
function App() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      {/* <Error /> */}
      {/* <Cart /> */}
      {/* <Home /> */}
      <Details/>
      {/* <Terms/> */}
      {/* <About/> */}
    </div>
  );
}

export default App;
