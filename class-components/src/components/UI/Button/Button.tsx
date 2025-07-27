import type { ButtonProps } from '../../../types/types';
import './button.css';

export const Button = ({
  type,
  children,
  className,
  ...props
}: ButtonProps) => {
  const buttonClassName = `button ${className || ''}`.trim() || undefined;
  return (
    <button
      {...props}
      type={type}
      className={`button ${buttonClassName || ''}`.trim() || undefined}
    >
      {children}
    </button>
  );
};
