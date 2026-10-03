type FeatureCardProps = {
  number: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
};

function FeatureCard({
  number,
  icon,
  title,
  description,
  linkText,
  linkHref,
}: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-number">{number}</div>

      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={linkHref}>{linkText} →</a>
    </article>
  );
}

export default FeatureCard;