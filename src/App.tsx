import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.min.css";
import { Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPage from "./pages/ForgetPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="forget" element={<ForgetPage />} />
      <Route path="main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
