import "./door-button.css";

interface DoorButtonProps {
  size?: string;
  color?: string;
  children: React.ReactNode;
  as?: "a" | "button";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function DoorButton({
  size,
  color,
  children,
  as = "a",
  href = "#",
  onClick,
  className: additionalClassName,
}: DoorButtonProps) {
  const className = ["door-button", size && `door-button--${size}`, color && `door-button--${color}`, additionalClassName]
    .filter(Boolean)
    .join(" ");

  if (as === "button") {
    return (
      <button className={className} onClick={onClick}>
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
