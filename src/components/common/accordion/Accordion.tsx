"use client"
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails"; 
import { SSSItem } from "@/data/sss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
  items: SSSItem[];
}

const CustomAccordion: React.FC<AccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {items.map((item, idx) => (
        <Accordion
          key={idx}
          expanded={expanded === idx}
          onChange={handleChange(idx)}
          sx={{
            background: "#EFF7FC",
            boxShadow: "none",
            borderBottom: expanded !== idx ? "1px solid #E5E5E5" : "none",
          }}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={expanded === idx ? faMinus : faPlus}
                style={{ color: "#E30613", fontSize: 28 }}
              />
            }
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
            sx={{
              fontWeight: 700,
              fontSize: 20,
              color: "#111",
              minHeight: 64,
              '& .MuiAccordionSummary-content': { margin: 0 },
              mb: 0,
              pb: 0,
            }}
          >
            {item.question}
          </AccordionSummary>
          <AccordionDetails 
            sx={{ 
              color: "#4F4F4F", 
              fontSize: 18, 
              opacity: 0.7, 
              mb: 0, 
              pt: 1, 
              pb: 2,
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

export { CustomAccordion };   