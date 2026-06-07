"use client";

import { useState } from "react";

import "./service-dropdown.css";

interface ServiceDropdownProps {
  align: "left" | "center" | "right";
  title: string;
  label: string;
  text: string;
  className?: string;
}

export default function ServiceDropdown({
  align,
  title,
  label,
  text,
  className: additionalClassName,
}: ServiceDropdownProps) {

  const [expanded, setExpanded] = useState(false);

  const className = [
    "service-dropdown",
    `service-dropdown-align-${align}`,
    expanded ? "service-dropdown-expanded" : null,
    additionalClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} onClick={() => setExpanded(!expanded)}>
      <div className="service-dropdown-content">
        <button className="service-dropdown-header">
          <div className="service-dropdown-title">{title}</div>
          <div className="service-dropdown-label">{label}</div>
        </button>
        <div className="service-dropdown-text">{text}</div>
      </div>
    </div>
  );
}
