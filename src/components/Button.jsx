import leftArrow from "../assets/icons/leftArrow.svg";
export default function Button({
  children,
  variant = "primary",
  size = "md",

  ...rest
}) {
  const icon = <span><img className="btn-icon" src={leftArrow} alt="" /> </span>;
  const className = `btn btn-${variant} btn-${size} `;

  return (
    <button type="button" className={className} {...rest}>
      {children}
      {icon}
    </button>
  );
}
