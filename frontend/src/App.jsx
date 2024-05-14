/** @format */
// import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NewProject from "./pages/NewProject";

export default function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/sign-in" />}
          />

          <Route
            path="/sign-up"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />

          <Route
            path="/sign-in"
            element={!user ? <SignIn /> : <Navigate to="/" />}
          />

          <Route
            path="/new-project"
            element={user ? <NewProject /> : <Navigate to="/" sign-in />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
