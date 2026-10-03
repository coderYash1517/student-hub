import { Routes, Route, Navigate } from "react-router-dom";

import App from "../App";
import Login from "./Login";
import Register from "./Register";

function SimplePage({ title }: { title: string }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>{title}</h1>

      <button
        onClick={() => {
          window.location.href = "/";
        }}
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<App />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* STUDENTHUB PAGES */}
      <Route
        path="/dashboard"
        element={<SimplePage title="Student Dashboard" />}
      />

      <Route
        path="/resources"
        element={<SimplePage title="Study Resources" />}
      />

      <Route
        path="/assignments"
        element={<SimplePage title="Assignments" />}
      />

      <Route
        path="/events"
        element={<SimplePage title="Upcoming Events" />}
      />

      <Route
        path="/attendance"
        element={<SimplePage title="Attendance" />}
      />

      <Route
        path="/announcements"
        element={<SimplePage title="Announcements" />}
      />

      {/* ANY UNKNOWN URL → HOME */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default AppRoutes;