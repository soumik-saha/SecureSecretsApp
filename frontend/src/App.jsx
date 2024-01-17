/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateSecret from "./pages/CreateSecret";
import DeleteSecret from "./pages/DeleteSecret";
import EditSecret from "./pages/EditSecret";
import ShowSecret from "./pages/ShowSecret";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/secrets/create" element={<CreateSecret />} />
        <Route path="/secrets/delete/:id" element={<DeleteSecret />} />
        <Route path="/secrets/details/:id" element={<ShowSecret />} />
        <Route path="/secrets/edit/:id" element={<EditSecret />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;