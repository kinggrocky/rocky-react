import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/components/Nav'; // Asumsikan ini ada
import Home from './pages/Home';
import Produk from './pages/produk';
import Kategori from './pages/kategori';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Tampilkan Navbar di semua halaman */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route untuk halaman Home */}
        <Route path="/produk" element={<Produk />} /> {/* Route untuk halaman Produk */}
        <Route path="/kategori" element={<Kategori />} /> {/* Route untuk halaman Kategori */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;