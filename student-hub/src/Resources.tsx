const resources = [
  {
    subject: "Python",
    type: "NOTES",
    title: "Python Fundamentals",
    description: "Variables, data types, operators, conditions and loops.",
  },
  {
    subject: "DBMS",
    type: "NOTES",
    title: "Database Management Systems",
    description: "SQL, tables, keys, relationships and basic queries.",
  },
  {
    subject: "Web Development",
    type: "GUIDE",
    title: "HTML, CSS & JavaScript",
    description: "Complete beginner guide for modern web development.",
  },
  {
    subject: "Data Structures",
    type: "NOTES",
    title: "Arrays & Linked Lists",
    description: "Important concepts, operations and examples.",
  },
];

function Resources() {
  return (
    <div className="resources-page">

      <div className="resources-header">
        <span className="section-tag">LEARNING HUB</span>

        <h1>Study Resources</h1>

        <p>
          Find notes, guides and learning material for your subjects.
        </p>
      </div>

      <div className="resource-search">
        <input
          type="text"
          placeholder="Search resources..."
        />
      </div>

      <div className="resource-grid">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>

            <div className="resource-top">
              <span className="resource-type">
                {resource.type}
              </span>

              <span className="resource-subject">
                {resource.subject}
              </span>
            </div>

            <h2>{resource.title}</h2>

            <p>{resource.description}</p>

            <button className="primary-btn">
              View Resource →
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Resources;