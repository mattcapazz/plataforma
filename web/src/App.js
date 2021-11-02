import "./App.css";
import Cards from "./components/cards";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      
        <Cards>
          <Cards />
        </Cards>
      
      
      
    </div>
  );
}

export default App;
