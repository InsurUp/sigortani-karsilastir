"use client"
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails"; 
import { SSSItem } from "@/data/sss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface SSSAccordionProps {
  items: SSSItem[];
}

const SSSAccordion: React.FC<SSSAccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <Accordion
          key={idx}
          expanded={expanded === idx}
          onChange={handleChange(idx)}
          sx={{
            background: "#ffffff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: "1px solid #e5e5e5",
            borderRadius: "12px !important",
            marginBottom: "16px",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: "16px 0",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={expanded === idx ? faMinus : faPlus}
                style={{ color: "#E30613", fontSize: 20 }}
              />
            }
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
            sx={{
              fontWeight: 700,
              fontSize: 18,
              color: "#111",
              minHeight: 64,
              padding: "0 24px",
              borderRadius: "12px 12px 0 0",
              '& .MuiAccordionSummary-content': { 
                margin: "16px 0",
                fontSize: 18,
                fontWeight: 700,
                color: "#262163",
              },
              '&.Mui-expanded': {
                minHeight: 64,
                borderRadius: "12px 12px 0 0",
                backgroundColor: "#ffffff",
              },
            }}
          >
            {item.question}
          </AccordionSummary>
          <AccordionDetails 
            sx={{ 
              color: "#4F4F4F", 
              fontSize: 16, 
              lineHeight: 1.6,
              padding: "0 24px 24px 24px",
              marginTop: "0",
              borderRadius: "0 0 12px 12px",
              backgroundColor: "#ffffff",
              '& ul': {
                paddingLeft: '20px',
                marginBottom: '16px',
              },
              '& li': {
                marginBottom: '8px',
                listStyleType: 'disc',
                color: '#4F4F4F',
              },
              '& ol': {
                paddingLeft: '20px',
                marginBottom: '16px',
              },
              '& ol li': {
                listStyleType: 'decimal',
                marginBottom: '8px',
              },
              '& p': {
                marginBottom: '12px',
              },
            }}
          >
            <div 
              className="text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: item.answer
                  .replace(/•/g, '&bull;')
                  .replace(/\n/g, '<br/>')
                  .replace(/<br\/>(\s*<[uo]l>)/g, '$1') // ul/ol öncesindeki br'leri kaldır
                  .replace(/(<\/[uo]l>)\s*<br\/>/g, '$1') // ul/ol sonrasındaki br'leri kaldır
                  .replace(/<br\/>(\s*<li>)/g, '$1') // li öncesindeki br'leri kaldır
                  .replace(/(<\/li>)\s*<br\/>/g, '$1') // li sonrasındaki br'leri kaldır
              }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { SSSAccordion };
