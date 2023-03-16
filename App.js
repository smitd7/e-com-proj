
import './App.css';
import Navbar from './components/navbar';
import Shop from './components/shop';
import Cart from './components/cart';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
      <div>
      </div>
    </div>
  );
}

export default App;
