import React from "react";

interface pProps {
  children: React.ReactNode;
  className?: string;
}

const p: React.FC<pProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-justify font-fredoka text-3xl px-8 font-light mx-8  mb-6${className}`}>
      {children}
    </p>
  );
};

export default p;
