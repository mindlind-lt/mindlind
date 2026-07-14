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
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`faq-accordion ${className || ''}`}>
      {items.map((item, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <button
            onClick={() => toggle(index)}
            className="faq-question"
          >
            <ChevronDown className="faq-icon" />
            <span className="faq-question-text font-mono uppercase text-lg">{item.question}</span>
          </button>
          <div className="faq-answer">
            <div>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
