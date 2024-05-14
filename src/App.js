import "./App.css";
import Header from "./components/local components/Header";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar"



function App() {
  return (
    <div className="sm justify-end">
      <Header />
      <br/>
      <SearchBar/>
      <br/>
      <br/>
      <br/>
      <br/> 
      <ProductList/>

    </div>
  );
}



export default App;