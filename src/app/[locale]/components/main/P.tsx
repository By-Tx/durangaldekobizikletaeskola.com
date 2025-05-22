import React from "react";

interface pProps {
  children: React.ReactNode;
  className?: string;
}

const p: React.FC<pProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-justify font-fredoka xl:text-3xl lg:text-2xl md:text-xl sm:text-base xl:px-8 md:px-4 px-3 font-light xl:mx-8 md:mx-4 mx-3 mb-6 ${className}`}>
      {children}
    </p>
  );
};

export default p;
