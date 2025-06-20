import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import MenCollection from "./pages/collections/MenCollection.jsx";
import WomenCollection from "./pages/collections/WomenCollection.jsx";
import ChildrenCollection from "./pages/collections/ChildrenCollection.jsx";
import AccessoriesCollection from "./pages/collections/AccessoriesCollection.jsx";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <SearchBar />
      <div className="flex flex-col min-h-screen justify-between pt-18">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<MenCollection />} />
          <Route path="/women" element={<WomenCollection />} />
          <Route path="/children" element={<ChildrenCollection />} />
          <Route path="/accessories" element={<AccessoriesCollection />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
