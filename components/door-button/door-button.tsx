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
    <a href={href} className={className} onClick={onClick}>
      <div className="door-button-content">{children}</div>
    </a>
  );
}
