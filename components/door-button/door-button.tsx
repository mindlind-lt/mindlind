import "./door-button.css";

interface DoorButtonProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  children: React.ReactNode;
  as?: "a" | "button";
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  target?: React.HTMLAttributeAnchorTarget;
}

export default function DoorButton({
  size = "md",
  color,
  children,
  as = "a",
  href = "#",
  onClick,
  className: additionalClassName,
  fullWidth,
  type,
  target,
}: DoorButtonProps) {
  const className = ["door-button", size && `door-button-${size}`, color && `door-button-${color}`, fullWidth && "door-button-full-width", additionalClassName]
    .filter(Boolean)
    .join(" ");

  if (as === "button") {
    return (
      <button className={className} onClick={onClick} type={type || "button"}>
        <div className="door-button-content">{children}</div>
      </button>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
      <div className="door-button-content">{children}</div>
    </a>
  );
}
