import "./App.css";

import Navbar from "./components/Navbar";
import FeatureCard from "./components/StudentFeatureCard";
import EventCard from "./components/EventCard";
import DashboardPreview from "./components/DashboardPreview";

const features = [
  {
    number: "01",
    icon: "▣",
    title: "Study Resources",
    description:
      "Find notes, PDFs, presentations and learning material organized by subject.",
    linkText: "Explore resources",
    linkHref: "/resources",
  },
  {
    number: "02",
    icon: "✓",
    title: "Assignments",
    description:
      "Keep track of upcoming deadlines and completed work.",
    linkText: "View assignments",
    linkHref: "/assignments",
  },
  {
    number: "03",
    icon: "◷",
    title: "Events",
    description:
      "Discover workshops, hackathons, clubs and campus events.",
    linkText: "See events",
    linkHref: "/events",
  },
  {
    number: "04",
    icon: "!",
    title: "Announcements",
    description:
      "Never miss important notices and updates from your campus.",
    linkText: "Read updates",
    linkHref: "/announcements",
  },
];

const events = [
  {
    day: "12",
    month: "OCT",
    category: "ACADEMIC",
    title: "Introduction to Generative AI",
    details: "Seminar Hall • 2:00 PM",
  },
  {
    day: "18",
    month: "OCT",
    category: "COMMUNITY",
    title: "Developer Club Meetup",
    details: "Block B • 4:30 PM",
  },
  {
    day: "24",
    month: "OCT",
    category: "WORKSHOP",
    title: "Web Development Workshop",
    details: "Lab 3 • 11:00 AM",
  },
];

function App() {
  const goTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="app">

      <Navbar />

      <main>

        {/* ================= HERO ================= */}

        <section className="hero" id="home">

          <div className="hero-content">

            <div className="status">
              <span></span>
              Semester is in progress
            </div>

            <h1>
              Everything you need
              <br />
              <span>to stay ahead.</span>
            </h1>

            <p>
              Your personal student workspace for assignments,
              resources, events, announcements and everything
              happening around your campus.
            </p>

            <div className="hero-actions">

              <button
                className="primary-btn"
                onClick={() => goTo("/dashboard")}
              >
                Explore Dashboard →
              </button>

              <button
                className="secondary-btn"
                onClick={() => goTo("/resources")}
              >
                Browse Resources
              </button>

            </div>

            <div className="quick-stats">

              <button
                type="button"
                onClick={() => goTo("/assignments")}
              >
                <strong>08</strong>
                <span>Assignments</span>
              </button>

              <button
                type="button"
                onClick={() => goTo("/events")}
              >
                <strong>04</strong>
                <span>Upcoming Events</span>
              </button>

              <button
                type="button"
                onClick={() => goTo("/resources")}
              >
                <strong>12</strong>
                <span>New Resources</span>
              </button>

              <button
                type="button"
                onClick={() => goTo("/attendance")}
              >
                <strong>84%</strong>
                <span>Attendance</span>
              </button>

            </div>

          </div>

          <DashboardPreview />

        </section>


        {/* ================= FEATURES ================= */}

        <section
          className="features section"
          id="resources"
        >

          <div className="section-heading">

            <div>

              <span className="section-tag">
                WHY STUDENTHUB
              </span>

              <h2>
                Everything in one place.
              </h2>

            </div>

            <p>
              Stop jumping between different apps and groups.
              StudentHub keeps your academic life organized.
            </p>

          </div>

          <div className="feature-grid">

            {features.map((feature) => (
              <FeatureCard
                key={feature.number}
                number={feature.number}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                linkText={feature.linkText}
                linkHref={feature.linkHref}
              />
            ))}

          </div>

        </section>


        {/* ================= EVENTS ================= */}

        <section
          className="events-section"
          id="events"
        >

          <div className="section-heading">

            <span>WHAT'S HAPPENING</span>

            <h2>
              Upcoming Events
            </h2>

            <p>
              Stay updated with seminars, workshops and
              student activities.
            </p>

          </div>

          <div className="events-grid">

            {events.map((event, index) => (
              <EventCard
                key={index}
                day={event.day}
                month={event.month}
                category={event.category}
                title={event.title}
                details={event.details}
              />
            ))}

          </div>

        </section>


        {/* ================= ATTENDANCE ================= */}

        <section className="home-attendance">

          <div className="home-attendance-content">

            <span className="section-tag">
              ACADEMIC PERFORMANCE
            </span>

            <h2>
              Stay on top of your
              <br />
              <span>attendance.</span>
            </h2>

            <p>
              Track your subject-wise attendance and make
              sure you stay above the required 75% threshold.
            </p>

            <button
              className="primary-btn"
              onClick={() => goTo("/attendance")}
            >
              Check Attendance →
            </button>

          </div>


          <div className="home-attendance-card">

            <div className="attendance-circle-home">

              <div>
                <strong>84%</strong>
                <span>OVERALL</span>
              </div>

            </div>

            <div className="home-attendance-info">

              <span>
                ATTENDANCE STATUS
              </span>

              <h3>
                You're doing great
              </h3>

              <p>
                Above the required 75%
              </p>

              <div className="home-attendance-bar">
                <div></div>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="cta">

          <span className="section-tag">
            STUDENTHUB
          </span>

          <h2>
            Your student life,
            <br />
            <span>organized.</span>
          </h2>

          <p>
            One platform. Everything you need.
          </p>

          <button
            className="primary-btn"
            onClick={() => goTo("/dashboard")}
          >
            Explore Dashboard →
          </button>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-brand">

          <div className="brand-icon">
            S
          </div>

          <div>
            <h3>
              StudentHub
            </h3>

            <p>
              Built for students, by students.
            </p>
          </div>

        </div>


        <div className="footer-links">

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

          <a href="/attendance">
            Attendance
          </a>

          <a href="/announcements">
            Announcements
          </a>

        </div>


        <span>
          © 2026 StudentHub
        </span>

      </footer>

    </div>
  );
}

export default App;