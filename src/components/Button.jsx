export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...rest
}) {
  const className = `btn btn-${variant} btn-${size}`;

  return (
    <button 
    type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
