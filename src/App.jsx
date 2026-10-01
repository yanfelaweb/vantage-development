import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

    
    <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/properties" element={<Properties />} />
                <Route
                  path="/properties/:slug"
                  element={<PropertyDetails />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="*"
                element={<NotFound/>}/>
    </Routes>
    <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;