const subjects = [
  {
    id: 1,
    name: "Python",
    code: "CS201",
    attended: 28,
    total: 32,
    percentage: 87.5,
  },
  {
    id: 2,
    name: "Database Management Systems",
    code: "CS202",
    attended: 25,
    total: 30,
    percentage: 83.3,
  },
  {
    id: 3,
    name: "Web Development",
    code: "CS203",
    attended: 27,
    total: 30,
    percentage: 90,
  },
  {
    id: 4,
    name: "Data Structures",
    code: "CS204",
    attended: 22,
    total: 30,
    percentage: 73.3,
  },
  {
    id: 5,
    name: "Computer Networks",
    code: "CS205",
    attended: 24,
    total: 31,
    percentage: 77.4,
  },
];

function Attendance() {
  const totalAttended = subjects.reduce(
    (sum, subject) => sum + subject.attended,
    0
  );

  const totalClasses = subjects.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  const overallPercentage = (
    (totalAttended / totalClasses) *
    100
  ).toFixed(1);

  return (
    <div className="attendance-page">

      {/* HEADER */}

      <div className="attendance-header">

        <div>
          <span className="section-tag">
            ACADEMIC PERFORMANCE
          </span>

          <h1>Attendance</h1>

          <p>
            Track your attendance across all subjects and
            stay above the required 75% attendance.
          </p>
        </div>

      </div>


      {/* OVERALL CARD */}

      <div className="attendance-overview">

        <div
          className="attendance-circle"
          style={{
            background: `conic-gradient(
              var(--purple) ${overallPercentage}%,
              #303039 ${overallPercentage}% 100%
            )`,
          }}
        >
          <div>
            <strong>{overallPercentage}%</strong>
            <span>OVERALL</span>
          </div>
        </div>


        <div className="attendance-overview-info">

          <span className="mini-label">
            CURRENT ATTENDANCE
          </span>

          <h2>
            You're doing{" "}
            <span>
              {Number(overallPercentage) >= 75
                ? "great"
                : "okay"}
            </span>
          </h2>

          <p>
            You attended{" "}
            <strong>{totalAttended}</strong> out of{" "}
            <strong>{totalClasses}</strong> classes.
          </p>

          <div className="attendance-progress">
            <div
              style={{
                width: `${overallPercentage}%`,
              }}
            />
          </div>

          <div className="attendance-rule">
            <span>Minimum required attendance</span>
            <strong>75%</strong>
          </div>

        </div>

      </div>


      {/* SUBJECT HEADING */}

      <div className="attendance-section-title">

        <span className="section-tag">
          SUBJECT BREAKDOWN
        </span>

        <h2>Subject-wise Attendance</h2>

      </div>


      {/* SUBJECT LIST */}

      <div className="attendance-list">

        {subjects.map((subject) => {

          const isLow = subject.percentage < 75;

          const isExcellent = subject.percentage >= 85;

          return (
            <div
              className="attendance-card"
              key={subject.id}
            >

              {/* SUBJECT */}

              <div className="attendance-subject">

                <div className="subject-icon">
                  {subject.name.charAt(0)}
                </div>

                <div>
                  <h3>{subject.name}</h3>

                  <span>{subject.code}</span>
                </div>

              </div>


              {/* CLASSES */}

              <div className="attendance-numbers">

                <strong>
                  {subject.attended}/{subject.total}
                </strong>

                <span>Classes</span>

              </div>


              {/* PROGRESS */}

              <div className="subject-progress-wrapper">

                <div className="subject-progress">

                  <div
                    className={isLow ? "danger" : ""}
                    style={{
                      width: `${subject.percentage}%`,
                    }}
                  />

                </div>

                <span>
                  {subject.percentage}%
                </span>

              </div>


              {/* STATUS */}

              <div
                className={`attendance-status ${
                  isLow
                    ? "danger"
                    : isExcellent
                    ? "excellent"
                    : ""
                }`}
              >
                {isLow
                  ? "LOW"
                  : isExcellent
                  ? "EXCELLENT"
                  : "GOOD"}
              </div>

            </div>
          );
        })}

      </div>


      {/* REMINDER */}

      <div className="attendance-tip">

        <div className="tip-icon">
          !
        </div>

        <div>

          <strong>
            Attendance reminder
          </strong>

          <p>
            Maintain at least 75% attendance. Subjects below
            75% require extra attention.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Attendance;