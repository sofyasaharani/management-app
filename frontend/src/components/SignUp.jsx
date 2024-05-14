/** @format */

import "../styles/Login.css";
import { useSignup } from "../hooks/useSignUp";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password);
  };
  return (
    <div className="Login">
      <div className="container login" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
            <input
              placeholder="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <a href="#">Forgot your password?</a>
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <div>
                <button disabled={isLoading}>
                  <Link to="/sign-in">Sign In</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
