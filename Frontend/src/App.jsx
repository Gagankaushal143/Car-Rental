import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CarDetails } from "./pages/CarDetails";

function App() {
  return (
    <div className="bg-linear-to-r from-white to-orange-50 h-screen pt-1">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarDetails />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element= {<Login />}/>
        <Route path="/register" element = {<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
