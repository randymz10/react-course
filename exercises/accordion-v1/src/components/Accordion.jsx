import faqs from "../data.js";
import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((e, i) => (
        <AccordionItem num={i} title={e.title} text={e.text} key={i} />
      ))}
    </div>
  );
}

export default Accordion;
