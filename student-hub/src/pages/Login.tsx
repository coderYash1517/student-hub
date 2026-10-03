import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://student-hub-p462.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed.");
        return;
      }

      // Save logged-in user information
      localStorage.setItem(
        "studentHubUser",
        JSON.stringify(data.user)
      );

      setSuccess("Login successful! Redirecting...");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

    } catch (error) {
      console.error(error);

      setError(
        "Cannot connect to server. Please check your internet connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">S</div>

        <div className="auth-heading">
          <span className="auth-label">STUDENTHUB</span>

          <h1>Welcome back</h1>

          <p>
            Login to manage your campus life.
          </p>
        </div>

        {error && (
          <div className="auth-error">
            <span>!</span>
            {error}
          </div>
        )}

        {success && (
          <div className="auth-success">
            ✓ {success}
          </div>
        )}

        <form onSubmit={handleLogin}>

          <div className="auth-field">
            <label>Email address</label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="auth-field">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login →"}
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?{" "}

          <button
            type="button"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Create Account
          </button>
        </p>

      </div>

    </div>
  );
}

export default Login;