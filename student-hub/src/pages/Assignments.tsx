import { useState } from "react";

const initialAssignments = [
  {
    id: 1,
    subject: "Python",
    title: "Python Fundamentals",
    dueDate: "08 Oct 2026",
    priority: "HIGH",
    status: "PENDING",
    description:
      "Complete the Python fundamentals exercises covering variables, data types, operators and control flow.",
  },
  {
    id: 2,
    subject: "DBMS",
    title: "SQL Queries Practice",
    dueDate: "12 Oct 2026",
    priority: "MEDIUM",
    status: "PENDING",
    description:
      "Practice SQL queries including SELECT, WHERE, ORDER BY, GROUP BY and JOIN operations.",
  },
  {
    id: 3,
    subject: "Web Development",
    title: "Responsive Website",
    dueDate: "18 Oct 2026",
    priority: "HIGH",
    status: "PENDING",
    description:
      "Create a responsive website that works smoothly across desktop, tablet and mobile screens.",
  },
  {
    id: 4,
    subject: "Data Structures",
    title: "Linked List Implementation",
    dueDate: "22 Oct 2026",
    priority: "LOW",
    status: "PENDING",
    description:
      "Implement singly and doubly linked lists and demonstrate insertion, deletion and traversal.",
  },
];

function Assignments() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [filter, setFilter] = useState("ALL");
  const [selectedAssignment, setSelectedAssignment] =
    useState<number | null>(null);

  const completedCount = assignments.filter(
    (assignment) => assignment.status === "COMPLETED"
  ).length;

  const pendingCount = assignments.length - completedCount;

  const highPriorityCount = assignments.filter(
    (assignment) =>
      assignment.priority === "HIGH" &&
      assignment.status === "PENDING"
  ).length;

  const toggleStatus = (id: number) => {
    setAssignments((currentAssignments) =>
      currentAssignments.map((assignment) =>
        assignment.id === id
          ? {
              ...assignment,
              status:
                assignment.status === "COMPLETED"
                  ? "PENDING"
                  : "COMPLETED",
            }
          : assignment
      )
    );
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === "ALL") return true;
    if (filter === "PENDING") return assignment.status === "PENDING";
    if (filter === "COMPLETED")
      return assignment.status === "COMPLETED";
    if (filter === "HIGH")
      return assignment.priority === "HIGH";

    return true;
  });

  const completionPercentage =
    assignments.length === 0
      ? 0
      : Math.round((completedCount / assignments.length) * 100);

  return (
    <div className="assignments-page">

      {/* HEADER */}
      <div className="assignments-header">
        <span className="section-tag">ACADEMIC WORK</span>

        <h1>Assignments</h1>

        <p>
          Keep track of your deadlines, priorities and academic progress.
        </p>
      </div>

      {/* PROGRESS */}
      <div className="assignment-progress">

        <div className="progress-info">
          <div>
            <span>OVERALL PROGRESS</span>
            <strong>{completionPercentage}%</strong>
          </div>

          <p>
            {completedCount} of {assignments.length} assignments completed
          </p>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>

      </div>

      {/* STATS */}
      <div className="assignment-stats">

        <div className="assignment-stat">
          <span className="stat-label">PENDING</span>
          <strong>{pendingCount}</strong>
          <small>Need attention</small>
        </div>

        <div className="assignment-stat">
          <span className="stat-label">COMPLETED</span>
          <strong>{completedCount}</strong>
          <small>Good progress</small>
        </div>

        <div className="assignment-stat">
          <span className="stat-label">HIGH PRIORITY</span>
          <strong>{highPriorityCount}</strong>
          <small>Important tasks</small>
        </div>

        <div className="assignment-stat">
          <span className="stat-label">TOTAL</span>
          <strong>{assignments.length}</strong>
          <small>Assignments</small>
        </div>

      </div>

      {/* FILTER BAR */}
      <div className="assignment-toolbar">

        <div>
          <h3>Your Assignments</h3>
          <p>Manage your academic tasks</p>
        </div>

        <div className="assignment-filters">

          {["ALL", "PENDING", "COMPLETED", "HIGH"].map(
            (filterName) => (
              <button
                key={filterName}
                className={
                  filter === filterName
                    ? "assignment-filter active"
                    : "assignment-filter"
                }
                onClick={() => setFilter(filterName)}
              >
                {filterName === "HIGH"
                  ? "HIGH PRIORITY"
                  : filterName}
              </button>
            )
          )}

        </div>

      </div>

      {/* ASSIGNMENT LIST */}
      <div className="assignment-list">

        {filteredAssignments.map((assignment) => {

          const isCompleted =
            assignment.status === "COMPLETED";

          const isSelected =
            selectedAssignment === assignment.id;

          return (
            <div
              className={`assignment-card ${
                isCompleted ? "completed" : ""
              } ${isSelected ? "expanded" : ""}`}
              key={assignment.id}
            >

              <div className="assignment-main">

                {/* CHECK */}
                <div className="assignment-check">
                  <button
                    onClick={() =>
                      toggleStatus(assignment.id)
                    }
                    aria-label="Toggle assignment status"
                    className={isCompleted ? "checked" : ""}
                  >
                    {isCompleted ? "✓" : ""}
                  </button>
                </div>

                {/* INFO */}
                <div className="assignment-info">

                  <div className="assignment-meta">

                    <span className="assignment-subject">
                      {assignment.subject}
                    </span>

                    <span
                      className={`priority ${assignment.priority.toLowerCase()}`}
                    >
                      {assignment.priority}
                    </span>

                  </div>

                  <h2>{assignment.title}</h2>

                  <p className="assignment-due">
                    Due date:
                    <strong>{assignment.dueDate}</strong>
                  </p>

                  {/* DESCRIPTION */}
                  {isSelected && (
                    <div className="assignment-description">
                      <p>{assignment.description}</p>
                    </div>
                  )}

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="assignment-right">

                <span
                  className={`assignment-status ${
                    isCompleted ? "status-completed" : ""
                  }`}
                >
                  {isCompleted
                    ? "COMPLETED ✓"
                    : "PENDING"}
                </span>

                <button
                  className="assignment-details-btn"
                  onClick={() =>
                    setSelectedAssignment(
                      isSelected ? null : assignment.id
                    )
                  }
                >
                  {isSelected
                    ? "Hide Details ↑"
                    : "View Details →"}
                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* EMPTY STATE */}
      {filteredAssignments.length === 0 && (
        <div className="assignment-empty">

          <div className="empty-icon">✓</div>

          <h3>No assignments here</h3>

          <p>
            Try selecting another filter to see your assignments.
          </p>

        </div>
      )}

    </div>
  );
}

export default Assignments;