import React, { Component } from 'react';
import type { ButtonProps } from '../../../types/types';
import './button.css';

export class Button extends Component<ButtonProps> {
  static defaultProps = {
    type: 'button',
    className: '',
  };
  render() {
    const { type, children, className, ...props } = this.props;
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
  }
}
