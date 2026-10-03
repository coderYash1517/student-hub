import { useState } from "react";

const announcements = [
  {
    id: 1,
    category: "IMPORTANT",
    title: "Mid-Term Examination Schedule",
    date: "03 Oct 2026",
    description:
      "The mid-term examination schedule has been published. Students are advised to check their respective subjects and examination dates.",
  },
  {
    id: 2,
    category: "ACADEMIC",
    title: "Assignment Submission Reminder",
    date: "02 Oct 2026",
    description:
      "Students are requested to submit their pending assignments before the respective deadlines.",
  },
  {
    id: 3,
    category: "EVENT",
    title: "Developer Club Registrations Open",
    date: "30 Sep 2026",
    description:
      "Registrations are now open for the upcoming Developer Club meetup. All interested students can participate.",
  },
  {
    id: 4,
    category: "GENERAL",
    title: "Library Timing Update",
    date: "28 Sep 2026",
    description:
      "The library will remain open until 8:00 PM on weekdays during the examination preparation period.",
  },
];

function Announcements() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [filter, setFilter] = useState("ALL");

  const categories = [
    "ALL",
    "IMPORTANT",
    "ACADEMIC",
    "EVENT",
    "GENERAL",
  ];

  const filteredAnnouncements =
    filter === "ALL"
      ? announcements
      : announcements.filter(
          (announcement) => announcement.category === filter
        );

  return (
    <div className="announcements-page">

      {/* HEADER */}
      <div className="announcements-header">
        <span className="section-tag">CAMPUS UPDATES</span>

        <h1>Announcements</h1>

        <p>
          Stay updated with important notices, academic updates and
          campus activities.
        </p>
      </div>

      {/* TOP SUMMARY */}
      <div className="announcement-summary">

        <div className="announcement-summary-main">
          <span className="summary-label">LATEST UPDATES</span>

          <strong>{announcements.length}</strong>

          <p>
            announcements available
          </p>
        </div>

        <div className="summary-message">
          <span>✦</span>

          <div>
            <strong>Stay informed</strong>
            <p>
              Check this section regularly for important campus updates.
            </p>
          </div>
        </div>

      </div>

      {/* FILTERS */}
      <div className="announcement-toolbar">

        <div>
          <span className="section-mini-label">
            NOTICE BOARD
          </span>

          <h2>Latest Announcements</h2>
        </div>

        <div className="announcement-filters">

          {categories.map((category) => (
            <button
              key={category}
              className={
                filter === category
                  ? "announcement-filter active"
                  : "announcement-filter"
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}

        </div>

      </div>

      {/* ANNOUNCEMENT LIST */}
      <div className="announcement-list">

        {filteredAnnouncements.map((announcement, index) => {

          const isExpanded =
            expanded === announcement.id;

          const isImportant =
            announcement.category === "IMPORTANT";

          return (
            <div
              className={`announcement-card ${
                isImportant ? "important-announcement" : ""
              } ${isExpanded ? "expanded" : ""}`}
              key={announcement.id}
            >

              {/* NUMBER */}
              <div className="announcement-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="announcement-content">

                {/* TOP */}
                <div className="announcement-top">

                  <div className="announcement-tags">

                    <span
                      className={`announcement-category ${announcement.category.toLowerCase()}`}
                    >
                      {announcement.category}
                    </span>

                    {isImportant && (
                      <span className="announcement-important">
                        IMPORTANT
                      </span>
                    )}

                  </div>

                  <span className="announcement-date">
                    {announcement.date}
                  </span>

                </div>

                {/* TITLE */}
                <h2>{announcement.title}</h2>

                {/* DESCRIPTION */}
                <p className="announcement-description">

                  {isExpanded
                    ? announcement.description
                    : `${announcement.description.slice(0, 120)}${
                        announcement.description.length > 120
                          ? "..."
                          : ""
                      }`}

                </p>

                {/* ACTION */}
                <button
                  className="announcement-btn"
                  onClick={() =>
                    setExpanded(
                      isExpanded
                        ? null
                        : announcement.id
                    )
                  }
                >
                  {isExpanded
                    ? "Show Less ↑"
                    : "Read More →"}
                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* EMPTY STATE */}
      {filteredAnnouncements.length === 0 && (
        <div className="announcement-empty">

          <div className="empty-announcement-icon">
            ✓
          </div>

          <h3>No announcements found</h3>

          <p>
            Try selecting another category.
          </p>

        </div>
      )}

    </div>
  );
}

export default Announcements;