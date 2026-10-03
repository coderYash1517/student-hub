import { useEffect, useState } from "react";

function Navbar() {
  const [name, setName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("studenthub_user");

    if (user) {
      try {
        const data = JSON.parse(user);
        setName(data.name || "");
      } catch (error) {
        console.error("User data error:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("studenthub_user");
    localStorage.removeItem("studenthub_account");
    localStorage.removeItem("studenthub_remember");

    window.location.href = "/login";
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div
        className="brand"
        onClick={() => (window.location.href = "/")}
        style={{ cursor: "pointer" }}
      >
        <div className="brand-icon">
          S
        </div>

        <div>
          <h2>
            StudentHub
          </h2>

          <span>
            Your campus. One place.
          </span>
        </div>
      </div>


      {/* NAVIGATION */}
      <div className="nav-links">

        <a href="/">
          Home
        </a>

        <a href="/resources">
          Resources
        </a>

        <a href="/events">
          Events
        </a>

        <a href="/assignments">
          Assignments
        </a>

        <a href="/announcements">
          Announcements
        </a>

      </div>


      {/* USER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >

        {name ? (
          <>
            <button
              className="profile-btn"
              onClick={() =>
                (window.location.href = "/profile")
              }
            >
              {name}
            </button>

            <button
              className="profile-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="profile-btn"
            onClick={() =>
              (window.location.href = "/login")
            }
          >
            Login →
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;