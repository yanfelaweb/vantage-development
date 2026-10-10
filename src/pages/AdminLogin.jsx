


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("https://vantage-backend-1fn9.onrender.com/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (!data.token) {
        throw new Error("No login token received");
      }

      localStorage.setItem("adminToken", data.token);
      navigate("/admin", {replace: true});
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main style={{ maxWidth: "420px", margin: "60px auto", padding: "20px" }}>
      <h1>Vantage Admin Login</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="admin-email">Email</label>
        <input
          id="admin-email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="admin-password">Password</label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Log In</button>
      </form>

      {error && <p role="alert">{error}</p>}
    </main>
  );
}

export default AdminLogin;