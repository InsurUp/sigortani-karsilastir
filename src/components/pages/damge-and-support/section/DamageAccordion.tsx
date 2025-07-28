import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { DamageDocumentItem } from "@/data/damage";

interface DamageAccordionProps {
  documents: DamageDocumentItem[];
}

const DamageAccordion: React.FC<DamageAccordionProps> = ({ documents }) => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {documents.map((item, idx) => (
        <Accordion
          key={idx}
          expanded={expanded === idx}
          onChange={handleChange(idx)}
          sx={{
             boxShadow: "none",
            border: "0 !important",
            borderRadius: "0 !important",
            margin: "12px 0",
          "&:before": {
            display: "none",
          },
          }}
          
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={expanded === idx ? faMinus : faPlus}
                style={{ color: "#ED1D24", fontSize: 16 }}
              />
            }
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
            sx={{
              fontWeight: 700,
              fontSize: 20,
              color: "#12141D",
              minHeight: 56,
              maxHeight: 56,
              borderRadius: "15px",
              background: "#F4F4F4",
              border: "1px solid #262163",
              margin: 0,
              px: 3,
              py: 0,
              transition: 'none',
              '&.Mui-expanded': {
                minHeight: 56,
                maxHeight: 56,
                background: "#F4F4F4",
              },
              '& .MuiAccordionSummary-content': {
                margin: 0,
                fontSize: 20,
                fontWeight: 700,
                color: "#262163",
                transition: 'none',
              },
            }}
          >
            <Typography sx={{ fontSize: 18, fontWeight: 700, color: "#262163" }}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "transparent", px: 4, pt: 2,pb:0 }}>
            <ul style={{ paddingLeft: 0, margin: 0 }}>
              {item.description.split("\n").map((desc, i) => (
                <li key={i} style={{ fontSize: 16, color: "#000", opacity: 0.7, marginBottom: 6 }}>{desc}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default DamageAccordion; 