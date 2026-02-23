import { Component } from 'react';
import type { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('App render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
          <h1 style={{ marginBottom: '0.75rem' }}>Something went wrong.</h1>
          <p style={{ marginBottom: '1rem' }}>
            Please open the browser console and share the error message.
          </p>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#b91c1c' }}>
            {this.state.error?.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
