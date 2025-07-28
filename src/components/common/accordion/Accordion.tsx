"use client"
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
          <AccordionDetails sx={{ color: "#4F4F4F", fontSize: 18, opacity: 0.7, mb: 0, pt: 1, pb: 2 }}>
            {item.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { CustomAccordion };   