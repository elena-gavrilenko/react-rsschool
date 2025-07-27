import type { InputProps } from '../../../types/types';
import './input.css';

export const Input = ({
  className = '',
  error = false,
  search = false,
  value = '',
  onChange,
  onSearch,
  label,
  errorMessage,
  ...props
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange?.(e);
    onSearch?.(newValue);
  };

  const inputClass = `input ${error ? 'input__error' : ''} ${
    search ? 'input__search' : ''
  } ${className}`.trim();

  return (
    <div className="input__wrapper">
      {label ? (
        <label className="input__label">
          {label}
          <input
            className={inputClass || undefined}
            onChange={handleChange}
            value={value}
            {...props}
          />
        </label>
      ) : (
        <input
          className={inputClass || undefined}
          onChange={handleChange}
          value={value}
          {...props}
        />
      )}
      {error && errorMessage && (
        <span className="input__errorMessage">{errorMessage}</span>
      )}
    </div>
  );
};
