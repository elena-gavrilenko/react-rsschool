import { useState, useEffect } from 'react';
import type { InputProps } from '../../../types/types';
import './input.css';

export const Input = ({
  className = '',
  error = false,
  search = false,
  value: propValue = '',
  onChange,
  onSearch,
  label,
  errorMessage,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(
    localStorage.getItem('searchQuery') || propValue.toString()
  );

  // Синхронизация с внешними изменениями propValue
  useEffect(() => {
    if (propValue !== undefined && propValue.toString() !== value) {
      setValue(propValue.toString());
    }
  }, [propValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem('searchQuery', newValue);

    // Вызываем оба обработчика, если они предоставлены
    if (onChange) {
      onChange(e);
    }
    if (onSearch) {
      onSearch(newValue);
    }
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

Input.defaultProps = {
  className: '',
  error: false,
  search: false,
};
