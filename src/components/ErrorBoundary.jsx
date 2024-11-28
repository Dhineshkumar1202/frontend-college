import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
   
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
  
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong. Please try again later.</h2>
        
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
