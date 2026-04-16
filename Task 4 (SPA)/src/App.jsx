import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./pages/Layout/Navbar";
import Footer from "./pages/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <ToastContainer position="top-center" autoClose={3000} />
        <main style={{ flex: 1 }}>  
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
