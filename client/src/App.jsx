import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Clients from "./pages/Clients";
import IndustriesWeServe from "./pages/IndustriesWeServe";
import Network from "./pages/Network";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-1 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/networkcoverage" element={<Network />} />
          <Route path="/industriesweserve" element={<IndustriesWeServe />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
