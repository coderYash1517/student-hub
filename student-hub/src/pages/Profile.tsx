import { useState } from "react";

function Profile() {
  const savedName =
    localStorage.getItem("studentName") ||
    localStorage.getItem("userName") ||
    localStorage.getItem("name") ||
    "Yash Tiwari";

  const savedEmail =
    localStorage.getItem("studentEmail") ||
    localStorage.getItem("email") ||
    "student@example.com";

  const [name, setName] = useState(savedName);
  const [email, setEmail] = useState(savedEmail);

  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);

    setEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const initials = name
    .trim()
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="profile-page">

      {/* TOP */}
      <div className="profile-topbar">
        <div>
          <span className="section-tag">MY ACCOUNT</span>
          <h1>Profile</h1>
          <p>Manage your StudentHub account and academic information.</p>
        </div>

        <button
          className="profile-back"
          onClick={() => (window.location.href = "/")}
        >
          ← Back to Home
        </button>
      </div>


      {/* MAIN PROFILE */}
      <div className="profile-layout">

        {/* LEFT PROFILE CARD */}
        <div className="profile-main-card">

          <div className="profile-cover"></div>

          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              {initials}
            </div>
          </div>

          <div className="profile-main-content">

            <div className="profile-name-row">
              <div>
                <h2>{name}</h2>
                <p>{email}</p>
              </div>

              <span className="profile-status">
                ● Active
              </span>
            </div>

            <div className="profile-divider"></div>

            <div className="profile-info-grid">

              <div className="profile-info-item">
                <span>STUDENT ID</span>
                <strong>STU-2026-001</strong>
              </div>

              <div className="profile-info-item">
                <span>COURSE</span>
                <strong>B.Tech Computer Science</strong>
              </div>

              <div className="profile-info-item">
                <span>YEAR</span>
                <strong>2nd Year</strong>
              </div>

              <div className="profile-info-item">
                <span>SEMESTER</span>
                <strong>Semester 3</strong>
              </div>

            </div>

          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="profile-side">

          {/* STATS */}
          <div className="profile-stats">

            <div className="profile-stat">
              <span>ATTENDANCE</span>
              <strong>84%</strong>
              <small>Overall</small>
            </div>

            <div className="profile-stat">
              <span>CGPA</span>
              <strong>8.2</strong>
              <small>Current</small>
            </div>

            <div className="profile-stat">
              <span>ASSIGNMENTS</span>
              <strong>08</strong>
              <small>Total</small>
            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="profile-actions-card">

            <div className="profile-card-heading">
              <div>
                <span className="mini-label">ACCOUNT</span>
                <h3>Quick Actions</h3>
              </div>
            </div>

            <div className="quick-actions">

              <button
                onClick={() => setEditing(true)}
                className="quick-action"
              >
                <span className="quick-icon">✎</span>

                <div>
                  <strong>Edit Profile</strong>
                  <small>Update your information</small>
                </div>

                <span>→</span>
              </button>


              <button
                onClick={() => (window.location.href = "/assignments")}
                className="quick-action"
              >
                <span className="quick-icon">✓</span>

                <div>
                  <strong>My Assignments</strong>
                  <small>Check your academic work</small>
                </div>

                <span>→</span>
              </button>


              <button
                onClick={() => (window.location.href = "/resources")}
                className="quick-action"
              >
                <span className="quick-icon">▣</span>

                <div>
                  <strong>Study Resources</strong>
                  <small>Open your learning material</small>
                </div>

                <span>→</span>
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ACTIVITY */}
      <div className="profile-bottom">

        <div className="profile-activity-card">

          <div className="profile-card-heading">
            <div>
              <span className="mini-label">RECENT</span>
              <h3>Recent Activity</h3>
            </div>

            <span className="activity-count">3 updates</span>
          </div>

          <div className="activity-list">

            <div className="activity-item">
              <div className="activity-icon">✓</div>

              <div>
                <strong>Assignment completed</strong>
                <p>Python Fundamentals</p>
              </div>

              <span>Today</span>
            </div>


            <div className="activity-item">
              <div className="activity-icon">◷</div>

              <div>
                <strong>Event registered</strong>
                <p>Introduction to Generative AI</p>
              </div>

              <span>Yesterday</span>
            </div>


            <div className="activity-item">
              <div className="activity-icon">▣</div>

              <div>
                <strong>Resource opened</strong>
                <p>Database Management Systems</p>
              </div>

              <span>2 days ago</span>
            </div>

          </div>

        </div>


        {/* PROFILE COMPLETION */}
        <div className="completion-card">

          <span className="mini-label">PROFILE</span>

          <h3>Profile completion</h3>

          <div className="completion-number">
            <strong>80%</strong>
            <span>Almost there</span>
          </div>

          <div className="completion-bar">
            <div></div>
          </div>

          <p>
            Add your profile details to complete your StudentHub profile.
          </p>

          <button onClick={() => setEditing(true)}>
            Complete Profile →
          </button>

        </div>

      </div>


      {/* EDIT MODAL */}
      {editing && (
        <div className="profile-modal-overlay">

          <div className="profile-modal">

            <button
              className="modal-close"
              onClick={() => setEditing(false)}
            >
              ×
            </button>

            <span className="section-tag">EDIT ACCOUNT</span>

            <h2>Edit Profile</h2>

            <p>
              Update the information connected to your StudentHub account.
            </p>

            <label>Full Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="modal-actions">

              <button
                className="modal-cancel"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>

              <button
                className="modal-save"
                onClick={handleSave}
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>
      )}


      {/* SAVE MESSAGE */}
      {saved && (
        <div className="save-toast">
          ✓ Profile updated successfully
        </div>
      )}

    </div>
  );
}

export default Profile;