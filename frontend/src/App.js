import React, { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import GameDetalis from "./components/gameDetalis/GameDetalis";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import GetGames from "./components/admin/GetGames";
import EditGame from "./components/admin/EditGame";
import AddGame from "./components/admin/AddGame";
import SignUp from "./components/signup/SignUp";
import AdminLogin from "./components/admin/AdminLogin";
import MainNavbar from "./components/navbar/SecondaryNavbar";
import Payment from "./components/payment/Payment";
import NotFound from "./components/not found/NotFound";




function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="pb-5"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game/:_id" element={<GameDetalis />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/addgame" element={<AddGame />} />
        <Route path="/admin" element={<GetGames />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="admin/update/:_id" element={<EditGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
