import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      // Save actual logged-in user
      localStorage.setItem(
        "studenthub_user",
        JSON.stringify(data.user)
      );

      if (rememberMe) {
        localStorage.setItem(
          "studenthub_remember",
          "true"
        );
      } else {
        localStorage.removeItem(
          "studenthub_remember"
        );
      }

      // Go to Home
      window.location.href = "/";

    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Cannot connect to StudentHub server. Please make sure the server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* LOGO */}
        <div className="auth-logo">
          S
        </div>

        {/* HEADER */}
        <div className="auth-heading">

          <span className="auth-label">
            STUDENTHUB
          </span>

          <h1>
            Welcome back
          </h1>

          <p>
            Sign in to access your student dashboard.
          </p>

        </div>

        {/* ERROR */}
        {error && (
          <div className="auth-error">
            <span>!</span>
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <div className="auth-field">

            <label htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              autoComplete="email"
            />

          </div>

          {/* PASSWORD */}
          <div className="auth-field">

            <div className="password-label-row">

              <label htmlFor="password">
                Password
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  alert(
                    "Password reset will be available soon."
                  )
                }
              >
                Forgot password?
              </button>

            </div>

            <div className="password-wrapper">

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {/* REMEMBER ME */}
          <label className="remember-row">

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) =>
                setRememberMe(e.target.checked)
              }
            />

            <span>
              Remember me
            </span>

          </label>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >

            {loading ? (
              <>
                <span className="auth-spinner"></span>
                Signing in...
              </>
            ) : (
              <>
                Sign in
                <span>→</span>
              </>
            )}

          </button>

        </form>

        {/* DIVIDER */}
        <div className="auth-divider">
          <span>OR</span>
        </div>

        {/* REGISTER */}
        <p className="auth-switch">

          Don't have an account?{" "}

          <button
            type="button"
            onClick={() =>
              (window.location.href = "/register")
            }
          >
            Create account
          </button>

        </p>

        {/* FOOTER */}
        <div className="auth-footer">

          <span>
            StudentHub
          </span>

          <span>
            •
          </span>

          <span>
            Student Portal
          </span>

        </div>

      </div>

    </div>
  );
}

export default Login;