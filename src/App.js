import './App.css';
import {BrowserRouter, BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Home";
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path='About/About' element={<About/>} />

          <Route  path='Cart/Cart' element = {<Cart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
