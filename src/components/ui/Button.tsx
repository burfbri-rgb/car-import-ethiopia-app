import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold",
  secondary: "bg-navy-700 hover:bg-navy-600 text-white font-medium",
  outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 font-medium",
  ghost: "text-gray-300 hover:text-white hover:bg-navy-800 font-medium",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs rounded",
  md: "px-5 py-2.5 text-sm rounded-lg",
  lg: "px-8 py-3.5 text-base rounded-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
