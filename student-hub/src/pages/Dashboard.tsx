function Dashboard() {
  const savedUser = localStorage.getItem("studenthub_user");

  if (!savedUser) {
    window.location.href = "/login";
    return null;
  }

  const user = JSON.parse(savedUser);

  const name = user.name || "Student";
  const attendance = user.attendance ?? 84;
  const cgpa = user.cgpa ?? 8.2;
  const assignments = user.assignments ?? 5;
  const events = user.events ?? 4;

  const initials = name
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="dashboard-page">

      <section className="dashboard-hero">
        <div>
          <span className="section-tag">
            STUDENT DASHBOARD
          </span>

          <h1>
            Good morning,
            <br />
            <span>{name} 👋</span>
          </h1>

          <p>
            Here's a quick overview of your academic progress,
            upcoming work and campus activities.
          </p>
        </div>
      </section>

      <section className="dashboard-stats">

        <div className="dashboard-stat-card purple">
          <div className="stat-top">
            <span>ATTENDANCE</span>
          </div>

          <strong>{attendance}%</strong>

          <div className="stat-progress">
            <div style={{ width: `${attendance}%` }} />
          </div>

          <small>
            Above required 75%
          </small>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-top">
            <span>CGPA</span>
          </div>

          <strong>{cgpa}</strong>

          <small className="stat-description">
            Current academic performance
          </small>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-top">
            <span>ASSIGNMENTS</span>
          </div>

          <strong>{assignments}</strong>

          <small className="stat-description">
            Pending submissions
          </small>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-top">
            <span>EVENTS</span>
          </div>

          <strong>{events}</strong>

          <small className="stat-description">
            Upcoming campus events
          </small>
        </div>

      </section>

      <section className="dashboard-card dashboard-profile-card">

        <div className="dashboard-avatar">
          {initials}
        </div>

        <h2>{name}</h2>

        <p>
          {user.email}
        </p>

        <span className="profile-pill">
          2nd Year · CSE
        </span>

      </section>

    </div>
  );
}

export default Dashboard;