import { useState } from "react";
import faqs from "../data.js";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((e, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={e.title}
          text={e.text}
          key={i}
        />
      ))}
    </div>
  );
}

export default Accordion;
