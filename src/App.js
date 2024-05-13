import "./App.css";
import Header from "./components/local components/Header";
import Error from "./components/local components/Error";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Error />
    </div>
  );
}

export default App;
