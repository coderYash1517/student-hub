type EventCardProps = {
  day: string;
  month: string;
  category: string;
  title: string;
  details: string;
};

function EventCard({
  day,
  month,
  category,
  title,
  details,
}: EventCardProps) {
  return (
    <div className="event">
      <div className="date">
        <strong>{day}</strong>
        <span>{month}</span>
      </div>

      <div className="event-info">
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{details}</p>
      </div>

      <button>Register →</button>
    </div>
  );
}

export default EventCard;