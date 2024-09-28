import React, { useState } from 'react';
import './FAQ2.css';

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="faq">
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg>FREQUENTLY ASKED QUESTIONS<svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg></h1>
      <section className="faq-section">
        <div className="container">
          <div className="w-lg-50 mx-auto">
            <div className="accordion accordion-flush" id="accordionExample">
              
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${openAccordion === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={openAccordion === index}
                      aria-controls={`coll${index}`}
                    >
                      <h5>{faq.question}</h5>
                     
                    </button>
                  </h2>
                  <div
                    id={`coll${index}`}
                    className={`accordion-collapse collapse ${openAccordion === index ? 'show' : ''}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqData = [
  {
    question: 'Who are the collaborating partners of SolarGAGA?',
    answer: "SolarGAGA, as an entity under UticAsia, collaborates with The Electrik Company and UTICA to upscaling existing renewable energy systems. UTICA's management brings over 20 years of experience overseeing and installing high-quality PV Renewable Energy Systems, having participated in numerous significant commercial and residential projects.",
  },

];

export default FAQ;
