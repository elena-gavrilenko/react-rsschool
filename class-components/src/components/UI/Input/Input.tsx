import React, { Component } from 'react';
import type { InputProps } from '../../../types/types';
import './input.css';

export class Input extends Component<InputProps> {
  static defaultProps = {
    className: '',
    error: false,
    search: false,
  };
  render() {
    const {
      className,
      error,
      label,
      errorMessage,
      search,
      onChange,
      onSearch,
      ...props
    } = this.props;
    const inputClass = `input ${error ? 'input__error' : ''} ${
      search ? 'input__search' : ''
    } ${className}`.trim();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      if (onSearch) onSearch(e.target.value);
    };
    return (
      <div className="input__wrapper">
        {label && (
          <label className="input__label">
            {label}
            <input
              className={inputClass || undefined}
              onChange={handleChange}
              {...props}
            />
          </label>
        )}
        {!label && (
          <input
            className={inputClass || undefined}
            onChange={handleChange}
            {...props}
          />
        )}
        {error && errorMessage && (
          <span className="input__errorMessage">{errorMessage}</span>
        )}
      </div>
    );
  }
}
