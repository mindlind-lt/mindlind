"use client";

import { useState } from "react";
import "./service-block-item.css";

type ServiceBlockItemProps = {
  title: string;
  children: React.ReactNode;
};

export function ServiceBlockItem({ title, children }: ServiceBlockItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`service-block-item${isOpen ? " is-open" : ""}`}>
      <div className="container">
        <div className="service-block-item-inner">

          <button
            className="service-block-item-trigger"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
          >
            <span className="service-block-item-icon" aria-hidden="true">
              <span className="service-block-item-icon-bar service-block-item-icon-bar--h" />
              <span className="service-block-item-icon-bar service-block-item-icon-bar--v" />
            </span>
            <h4 className="service-block-item-title">{title}</h4>
          </button>
          
          <div className="service-block-item-body" aria-hidden={!isOpen}>
            <div className="service-block-item-text">{children}</div>
          </div>

        </div>
      </div>
    </div>
  );
}
