function Resources() {
  const resources = [
    {
      number: "01",
      icon: "📘",
      title: "Lecture Notes",
      description:
        "Subject-wise notes, module summaries and important concepts for quick revision.",
      meta: "24 Materials",
      type: "Notes",
    },
    {
      number: "02",
      icon: "📊",
      title: "Presentations",
      description:
        "Class presentations, topic explanations and visual learning material.",
      meta: "12 Materials",
      type: "PPT",
    },
    {
      number: "03",
      icon: "📝",
      title: "Previous Papers",
      description:
        "Previous examination papers to understand patterns and practice effectively.",
      meta: "18 Papers",
      type: "Papers",
    },
    {
      number: "04",
      icon: "🔗",
      title: "Important Links",
      description:
        "Useful academic websites, tools and external learning resources.",
      meta: "10 Links",
      type: "Links",
    },
  ];

  return (
    <div className="page resources-page">
      <div className="page-header">
        <span className="section-tag">STUDY MATERIAL</span>

        <h1>Resources</h1>

        <p>
          Everything you need for lectures, revision, assignments and exams.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="resource-toolbar">
        <div className="resource-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search resources..."
          />
        </div>

        <button className="filter-button">
          All Resources ▾
        </button>
      </div>

      {/* Featured section */}
      <div className="resource-feature">
        <div className="feature-content">
          <span className="feature-label">FEATURED RESOURCE</span>

          <h2>Operating Systems — Module 1</h2>

          <p>
            Complete study material covering introduction to operating
            systems, system structure, organization and important concepts.
          </p>

          <div className="feature-meta">
            <span>📄 Study Notes</span>
            <span>•</span>
            <span>Module 1</span>
          </div>

          <button className="primary-resource-button">
            Open Resource →
          </button>
        </div>

        <div className="feature-number">01</div>
      </div>

      {/* Resource cards */}
      <div className="resource-section-heading">
        <div>
          <span className="section-mini-label">BROWSE</span>
          <h2>All Resources</h2>
        </div>

        <span className="resource-count">4 Categories</span>
      </div>

      <div className="resource-grid">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.number}>
            <div className="resource-card-top">
              <div className="resource-icon">
                {resource.icon}
              </div>

              <span className="resource-number">
                {resource.number}
              </span>
            </div>

            <span className="resource-type">
              {resource.type}
            </span>

            <h3>{resource.title}</h3>

            <p>{resource.description}</p>

            <div className="resource-card-bottom">
              <span>{resource.meta}</span>

              <button>
                Open →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom info */}
      <div className="resource-tip">
        <div className="tip-icon">✦</div>

        <div>
          <strong>Study smarter</strong>
          <p>
            Use the resources section to quickly find material for your
            subjects, revision and exam preparation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resources;