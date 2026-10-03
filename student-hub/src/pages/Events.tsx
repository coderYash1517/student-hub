import { useState } from "react";

const events = [
  {
    id: 1,
    day: "12",
    month: "OCT",
    category: "ACADEMIC",
    title: "Introduction to Generative AI",
    details: "Seminar Hall • 2:00 PM",
    description:
      "Learn the fundamentals of Generative AI, Large Language Models and modern AI applications.",
    organizer: "Computer Science Department",
    seats: 120,
  },
  {
    id: 2,
    day: "18",
    month: "OCT",
    category: "COMMUNITY",
    title: "Developer Club Meetup",
    details: "Block B • 4:30 PM",
    description:
      "Meet fellow developers, share ideas and explore exciting student projects.",
    organizer: "Developer Club",
    seats: 60,
  },
  {
    id: 3,
    day: "24",
    month: "OCT",
    category: "WORKSHOP",
    title: "Web Development Workshop",
    details: "Lab 3 • 11:00 AM",
    description:
      "Build a modern web application and learn practical frontend development.",
    organizer: "Web Development Society",
    seats: 40,
  },
  {
    id: 4,
    day: "28",
    month: "OCT",
    category: "TECH",
    title: "AI & Machine Learning Talk",
    details: "Auditorium • 3:00 PM",
    description:
      "Explore how AI and Machine Learning are transforming modern technology.",
    organizer: "AI Society",
    seats: 150,
  },
];

function Events() {
  const [registered, setRegistered] = useState<number[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [filter, setFilter] = useState("ALL");

  const categories = [
    "ALL",
    "ACADEMIC",
    "WORKSHOP",
    "COMMUNITY",
    "TECH",
  ];

  const filteredEvents =
    filter === "ALL"
      ? events
      : events.filter((event) => event.category === filter);

  const handleRegister = (id: number) => {
    setRegistered((prev) =>
      prev.includes(id)
        ? prev.filter((eventId) => eventId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="events-page">

      {/* HEADER */}
      <div className="events-header">
        <span className="section-tag">CAMPUS LIFE</span>

        <h1>Upcoming Events</h1>

        <p>
          Discover workshops, seminars, meetups and activities happening
          around your campus.
        </p>
      </div>

      {/* TOP BAR */}
      <div className="events-toolbar">

        <div className="event-count">
          <strong>{filteredEvents.length}</strong>
          <span>events available</span>
        </div>

        <div className="event-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "filter-active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

      </div>

      {/* EVENTS */}
      <div className="events-list">

        {filteredEvents.map((event) => {
          const isRegistered = registered.includes(event.id);
          const isSelected = selectedEvent === event.id;

          return (
            <div
              className={`event-page-card ${
                isSelected ? "event-expanded" : ""
              }`}
              key={event.id}
            >

              {/* DATE */}
              <div className="event-date">
                <strong>{event.day}</strong>
                <span>{event.month}</span>
              </div>

              {/* CONTENT */}
              <div className="event-info">

                <div className="event-top-line">
                  <span className="event-category">
                    {event.category}
                  </span>

                  {isRegistered && (
                    <span className="registered-badge">
                      REGISTERED ✓
                    </span>
                  )}
                </div>

                <h2>{event.title}</h2>

                <p className="event-details">
                  {event.details}
                </p>

                {/* EXPANDED DETAILS */}
                {isSelected && (
                  <div className="event-description">

                    <p>{event.description}</p>

                    <div className="event-meta">

                      <div>
                        <span>ORGANIZED BY</span>
                        <strong>{event.organizer}</strong>
                      </div>

                      <div>
                        <span>AVAILABLE SEATS</span>
                        <strong>{event.seats}</strong>
                      </div>

                    </div>

                  </div>
                )}

                {/* ACTIONS */}
                <div className="event-actions">

                  <button
                    className="secondary-btn"
                    onClick={() =>
                      setSelectedEvent(
                        isSelected ? null : event.id
                      )
                    }
                  >
                    {isSelected
                      ? "Hide Details ↑"
                      : "View Details →"}
                  </button>

                  <button
                    className={
                      isRegistered
                        ? "registered-btn"
                        : "primary-btn"
                    }
                    onClick={() => handleRegister(event.id)}
                  >
                    {isRegistered
                      ? "Registered ✓"
                      : "Register Now →"}
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* EMPTY STATE */}
      {filteredEvents.length === 0 && (
        <div className="empty-events">
          <div>📅</div>
          <h3>No events found</h3>
          <p>Try selecting another category.</p>
        </div>
      )}

      {/* REGISTRATION SUMMARY */}
      {registered.length > 0 && (
        <div className="registration-summary">

          <div className="summary-number">
            {registered.length}
          </div>

          <div>
            <strong>
              {registered.length === 1
                ? "Event registered"
                : "Events registered"}
            </strong>

            <span>
              You can view your registered events here.
            </span>
          </div>

          <button
            onClick={() => setRegistered([])}
            className="clear-registration"
          >
            Clear
          </button>

        </div>
      )}

    </div>
  );
}

export default Events;