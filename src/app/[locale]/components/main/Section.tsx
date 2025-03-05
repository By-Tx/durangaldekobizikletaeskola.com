import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "" }) => {
  return (
    <section className={`my-20 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
