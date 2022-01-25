
import './App.css';
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Home2 from './Component/Home2';
import Home3 from "./Component/Home3";
import Navbar from "./Component/Navbar"

function App() {
  return (
    <div className="App">
     <Navbar/>
          
      <Home/>
      <Home2/>
      
      <Home3/>
      <Footer/>
    </div>
  );
}

export default App;
