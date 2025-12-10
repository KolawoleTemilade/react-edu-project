import LeftArrow from "../../assets/icons/leftArrow.svg?react";
import "./Button.css";
export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...rest
}) {
  const icon = (
    <span className="btn-icon">
      {" "}
      <LeftArrow />{" "}
    </span>
  );
  const className = `btn btn-${variant} btn-${size}`;

  return (
    <button type="button" className={className} {...rest}>
      {children}
      {icon}
    </button>
  );
}
