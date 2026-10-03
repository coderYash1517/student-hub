function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="preview-header">
        <div>
          <span className="mini-label">STUDENT OVERVIEW</span>
          <h3>Good morning, Student 👋</h3>
        </div>

        <div className="avatar">ST</div>
      </div>

      <div className="progress-card">
        <div className="progress-info">
          <span>Semester Progress</span>
          <strong>68%</strong>
        </div>

        <div className="progress-bar">
          <div></div>
        </div>

        <small>You're doing great. Keep going!</small>
      </div>

      <div className="preview-grid">
        <div className="mini-card">
          <span>ATTENDANCE</span>
          <strong>84%</strong>
          <small>Overall attendance</small>
        </div>

        <div className="mini-card">
          <span>CGPA</span>
          <strong>8.2</strong>
          <small>Current performance</small>
        </div>
      </div>

      <div className="next-class">
        <div className="class-icon">⌁</div>

        <div>
          <span>NEXT CLASS</span>
          <h4>Database Management Systems</h4>
          <p>Today · 11:30 AM · Room 204</p>
        </div>

        <span className="arrow">→</span>
      </div>
    </div>
  );
}

export default DashboardPreview;