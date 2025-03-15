import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { loginAdmin } from "../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginAdmin({ email, password });
    
            if (response.token && response.user) {
                localStorage.setItem("userToken", response.token);
                localStorage.setItem("user", JSON.stringify(response.user));
                window.dispatchEvent(new Event("userUpdate"));
                toast.success("Login successful!");
    
                if (response.user.role === "superadmin" || response.user.role === "admin") {
                    navigate("/dashboard");
                } else {
                    navigate("/");
                }
            } else {
                throw new Error("Invalid response from server");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
        </div>
    );
};

export default Login;
