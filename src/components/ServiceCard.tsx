interface ServiceCardProps {
  title: string;
  description: string;
  additionalClass?: string;
}

export const ServiceCard = ({ title, description, additionalClass = '' }: ServiceCardProps) => {
  return (
      <article className={`card-base gradient-card animate-on-scroll ${additionalClass}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <svg viewBox="0 0 24 24">
          <path d="M3 12h18M13 6l8 6-8 6"></path>
        </svg>
      </article>
  );
};