"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface SSSItem {
  question: string;
  answer: string;
}

interface BlogSSSAccordionProps {
  items: SSSItem[];
}

const BlogSSSAccordion: React.FC<BlogSSSAccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => () => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-gray-200 pb-3 last:border-b-0"
        >
          <button
            onClick={handleChange(idx)}
            className="w-full text-left flex items-center justify-between py-2 hover:text-blue-600 transition-colors"
            aria-expanded={expanded === idx}
          >
            <span className="font-semibold text-gray-800 text-lg pr-4">
              {item.question}
            </span>
            <div className="flex-shrink-0">
              <FontAwesomeIcon
                icon={expanded === idx ? faMinus : faPlus}
                className="text-blue-600 text-lg"
              />
            </div>
          </button>
          
          {expanded === idx && (
            <div className="mt-3 pl-0">
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { BlogSSSAccordion };
