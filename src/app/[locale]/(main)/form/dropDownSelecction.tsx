"use client";

import React, { FC, useState } from "react";

interface DropDownSelec {
  items: { content: string, 
    value: string, 
    checked: boolean
   }[];
  title: string;
}

const DropDownSelection: FC<DropDownSelec> = ({ items = [], title }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none"
      >
        {title} <span className="ml-2">▼</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            {items.map(({ content, value }, index) => (
              <li
                key={index}
                className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-200"
                
              >
                <input
                  type="checkbox"
                  value={value}
                  className="mr-2"
                />
                {content}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button >show</button>
    </div>
  );
};

export default DropDownSelection;
