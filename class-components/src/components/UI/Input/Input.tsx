import React, { Component } from 'react';
import type { InputProps, InputState } from '../../../types/types';
import './input.css';

export class Input extends Component<InputProps, InputState> {
  static defaultProps = {
    className: '',
    error: false,
    search: false,
  };
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value:
        localStorage.getItem('searchQuery') || props.value?.toString() || '',
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(e);
    if (this.props.onSearch) this.props.onSearch(value);
    localStorage.setItem('searchQuery', value);
  };
  render() {
    const { className, error, label, errorMessage, search, ...props } =
      this.props;
    const inputClass = `input ${error ? 'input__error' : ''} ${
      search ? 'input__search' : ''
    } ${className}`.trim();

    return (
      <div className="input__wrapper">
        {label && (
          <label className="input__label">
            {label}
            <input
              className={inputClass || undefined}
              onChange={this.handleChange}
              value={this.state.value}
              {...props}
            />
          </label>
        )}
        {!label && (
          <input
            className={inputClass || undefined}
            onChange={this.handleChange}
            value={this.state.value}
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
