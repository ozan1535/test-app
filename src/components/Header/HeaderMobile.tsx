import { useState } from "react";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion bg-transparent">
      <div className="accordion-item">
        <div className="accordion-header">Item 1</div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">Item 2</div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header" onClick={toggleAccordion}>
          Item 3
        </div>
        <div className={`accordion-content ${isOpen ? "" : "hidden"}`}>
          <div className="accordion-sub-item">Sub Item 1</div>
          <div className="accordion-sub-item">Sub Item 2</div>
          <div className="accordion-sub-item">Sub Item 3</div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">Item 4</div>
      </div>
    </div>
  );
}
