import { Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Assignments from "./pages/Assignments";
import Announcements from "./pages/Announcements";
import Resources from "./pages/Resources";

function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<App />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Student Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/events" element={<Events />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;