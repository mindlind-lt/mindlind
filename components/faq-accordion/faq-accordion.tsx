'use client';

import './faq-accordion.css';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            onClick={() => toggle(index)}
            className="faq-question"
          >
            <ChevronDown
              className={`faq-icon ${openIndex === index ? 'rotate-180' : ''}`}
            />
            <span className="faq-question-text font-mono uppercase text-xl font-medium">{item.question}</span>
          </button>
          <div
            className={`faq-answer ${openIndex === index ? 'open' : ''}`}
          >
            <div>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
