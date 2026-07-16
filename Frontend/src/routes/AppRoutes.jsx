import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Cars } from "../pages/Cars";
import { CarDetails } from "../pages/CarDetails";

export const AppRoutes = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/about" element={<About />}/>
        <Route path="/login" element= {<Login />}/>
        <Route path="/register" element = {<Register />}/>
      </Routes>
    </>
  )
}
