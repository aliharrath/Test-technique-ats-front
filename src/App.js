import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Produits from './Routes/Produits';
import Produit_detail from './Routes/Produit_detail';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="products" element={<Produits />} />
      <Route path="products/:id" element={<Produit_detail/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
