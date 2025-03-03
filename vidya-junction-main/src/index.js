import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";
import AttendancePage from "./pages/Attendance";
import Slot from "./pages/Slot";
import Activity from "./pages/Activity";
import SignUp from "./pages/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signIn" element={<Login />} />
      <Route path="/attendance" element={<AttendancePage />} />
      <Route path="/slot" element={<Slot />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  </Router>
);
