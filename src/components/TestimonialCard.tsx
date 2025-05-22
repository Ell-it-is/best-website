import { useEffect, useRef } from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  image: string;
}

export const TestimonialCard = ({ content, author, position, image }: TestimonialCardProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Force the testimonial to be visible
    if (testimonialRef.current) {
      // Immediately show the content by adding the show class
      testimonialRef.current.classList.add('show');
      
      // Setup intersection observer for scroll animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(testimonialRef.current);
      
      return () => {
        if (testimonialRef.current) {
          observer.unobserve(testimonialRef.current);
        }
      };
    }
  }, []);

  return (
    <div 
      className="testimonial-card animate-on-scroll show" 
      ref={testimonialRef}
      style={{ display: 'block', visibility: 'visible' }}
    >
      <div 
        className="testimonial-content"
        style={{ 
          display: 'block', 
          visibility: 'visible',
          opacity: 1,
          color: 'inherit'
        }}
      >
        "{content}"
      </div>
      <div className="testimonial-author">
        <img src={image} alt={author} className="testimonial-avatar" />
        <div className="testimonial-info">
          <h4 style={{ color: 'inherit' }}>{author}</h4>
          <p style={{ color: 'inherit', opacity: 0.8 }}>{position}</p>
        </div>
      </div>
    </div>
  );
};