//ErrorBoundary = Ant Design mecanical to catch and handle js errors for react components

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  // init without error
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // calling when error is catch
  static getDerivedStateFromError(error) {
    return { hasError: true }; 
  }

  // after the error was catched, handle information
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;