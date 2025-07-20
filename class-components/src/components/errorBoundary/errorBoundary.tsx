import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/types';
import './errorBoundary.css';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <h2 className="errorBoundary__title">something went wrong!</h2>;
        </div>
      );
    }

    return this.props.children;
  }
}
